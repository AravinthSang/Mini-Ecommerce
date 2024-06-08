const express=require("express")
const { getproducts, getproduct } = require("../controller/productController")
const router=express.Router()

router.route("/products").get(getproducts)
router.route("/products/:id").get(getproduct)

module.exports=router