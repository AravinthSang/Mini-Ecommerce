const { default: mongoose } = require("mongoose");

const orderSchema=new mongoose.Schema({
    cartItem:Array,
    amount:String,
    status:String,
    createdAt:Date

})
const ordermodel=mongoose.model("orders",orderSchema)
module.exports=ordermodel