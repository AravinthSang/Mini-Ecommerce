const express=require("express")
const { createorder } = require("../controller/orderscontroller")
const router=express.Router()

router.route("/createorder").post(createorder)

module.exports=router