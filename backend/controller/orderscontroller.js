const { json } = require("express");
const ordermodel = require("../model/orderModel")

//creating order for api-"/api/v1/createorder"
exports.createorder=async (req,res,next)=>{
    try{
    const cartItem=req.body;
    const status="pending"
    const amount=Number(cartItem.reduce((acc,item)=>(acc+item.products.price*item.qty),0)).toFixed(2)
 
   await ordermodel.create({cartItem,amount,status} )
    res.status(201).send({message:"order Created"})
    }
    catch(error){
        console.log(error)
        res.status(500).send({error})
    }
}