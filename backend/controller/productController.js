const productModel = require("../model/productModel")

exports.getproducts=async (req,res,next)=>{
        const query=req.query.keyword?{name:{
                $regex:req.query.keyword,
                $options:'i'
        }}:{}
        const products=await productModel.find(query)

   res.json({
        sucess:true,
        products
})
}
exports.getproduct=async (req,res,next)=>{
        const id=req.params.id
        try{
                var  product=await productModel.findById(id)  
                res.json({ product })
        }
        catch(err){
                
                res.status(404).send({ });
        }
    
}
