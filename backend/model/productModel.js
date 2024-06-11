const { default: mongoose } = require("mongoose");

const productSchema=new mongoose.Schema({
    name:String,
    price:String,
    description:String,
    images:[
        {image:String}],
    category:String,
    stock:String,
    createdIn:Date,
    numberofreviews:String,
    seller:String
})
const productModel=mongoose.model('product',productSchema)

module.exports=productModel