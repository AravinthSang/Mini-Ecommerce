import { Fragment, useEffect, useState } from "react";
import { Link, json } from "react-router-dom";
export default function Cart({ cartitem, setcartitem }) {

    useEffect(() => { updateSummary() }, [])
    const[unit,setUnit]=useState(0)
    
    function updateSummary() {
        const totalPrice = cartitem.reduce((acc, item) => {
            return acc + item.qty * item.product.price

        }, 0)
        setTotalPrice(Number(totalPrice).toFixed(2))

        const totalUnit=cartitem.reduce((acc,item)=>{
            return acc+item.qty
        },0)
        setUnit(totalUnit)
    }

    const [totalPrice, setTotalPrice] = useState(0)
    function increaseQty(item) {
        if (item.product.stock == item.qty)
            return
        const updateditem = cartitem.map((i) => {
            if (i.product._id == item.product._id)
                i.qty++
            updateSummary()
            return i
        })
        setcartitem(updateditem)
    }

    function decreaseQty(item) {
        if (item.qty == 1)
            return
        const updateditem = cartitem.map((i) => {
            if (i.product._id == item.product._id) {
                i.qty--
                updateSummary()
            }
            return i
        })
        setcartitem(updateditem)
    }
    function deleteFromCart(item) {
        const updateditem = cartitem.filter((i) => {
            if (i.product._id != item.product._id)
                return true
        })
        setcartitem(updateditem)
        updateSummary()
    }

    function placeOrder(){
            console.log(JSON.stringify(cartitem));
        cartitem && fetch(process.env.REACT_APP_API_URL+'/order',{
            method:'POST',
            headers:{'content-type':'application/json'},
            
        }) 
    }


    return cartitem.length>0?<Fragment>
        <div className="container container-fluid">
            <h2 className="mt-5">Your Cart: <b>{cartitem.length}</b></h2>

            <div className="row d-flex justify-content-between">
                <div className="col-12 col-lg-8">
                    {cartitem.map((item) => {
                        return <Fragment>
                            <div className="cart-item">
                                <div className="row">
                                    <div className="col-4 col-lg-3">
                                        <img src={item.product.images[0].image} alt="Laptop" height="90" width="115" />
                                    </div>

                                    <div className="col-5 col-lg-3">
                                        <Link> {item.product.description}</Link>
                                    </div>


                                    <div className="col-4 col-lg-2 mt-4 mt-lg-0">
                                        <p id="card_item_price">${Number(item.product.price * item.qty).toFixed(2)}</p>
                                    </div>

                                    <div className="col-4 col-lg-3 mt-4 mt-lg-0">
                                        <div className="stockCounter d-inline">
                                            <span className="btn btn-danger minus" onClick={() => decreaseQty(item)}>-</span>
                                            <input type="number" className="form-control count d-inline" value={item.qty} readOnly />

                                            <span className="btn btn-primary plus" onClick={() => increaseQty(item)}>+</span>
                                        </div>
                                    </div>

                                    <div className="col-4 col-lg-1 mt-4 mt-lg-0">
                                        <i id="delete_cart_item" className="fa fa-trash btn btn-danger" onClick={() => deleteFromCart(item)}></i>
                                    </div>

                                </div>
                            </div>
                        </Fragment>


                    })}

                </div>

                <div className="col-12 col-lg-3 my-4">
                    <div id="order_summary">
                        <h4>Order Summary</h4>
                        <hr />
                        <p>Subtotal:  <span className="order-summary-values">{unit} (Units)</span></p>
                        <p>Est. total: <span className="order-summary-values">{totalPrice}</span></p>

                        <hr />
                        <button id="checkout_btn" className="btn btn-primary btn-block" onClick={placeOrder}>Place Order</button>
                    </div>
                </div>
            </div>
        </div>
    </Fragment >:<h2 className="mt-4">Your cart is empty</h2>

}