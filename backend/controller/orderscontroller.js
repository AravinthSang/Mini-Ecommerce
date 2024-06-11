const productModel=require("../model/productModel")
const ordermodel = require("../model/orderModel")

//creating order for api-"/api/v1/order"
exports.createorder=async (req,res,next)=>{
    try{
    const cartItem=req.body;
    const status="pending"
    const amount=Number(cartItem.reduce((acc,item)=>(acc+item.product.price*item.qty),0)).toFixed(2)
   await ordermodel.create({cartItem,amount,status,} )
    cartItem.forEach(async(item) => {
        const product= await productModel.findById(item.product._id)
        product.stock=product.stock-item.qty
        await product.save();
     })
     
    res.status(201).send({message:"order Created"})
    }
    catch(error){
        console.log(error)
        res.status(500).send({error})
    }
}