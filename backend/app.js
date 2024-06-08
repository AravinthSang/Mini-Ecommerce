const express=require("express")
const app=express()
const env=require("dotenv")
const cors=require('cors')
const path=require("path")
const configPath=path.join(__dirname,"config","config.env")
env.config({path:configPath})
const products=require("./routes/product")
const orders=require("./routes/orders")
const connectDatabase = require("./config/connectDB")

connectDatabase()

app.use(express.json())
app.use(cors())
app.use("/api/v1",products)
app.use("/api/v1",orders)
app.listen(process.env.PORT ,()=>{
    console.log(`Listening to port:${process.env.PORT}`)

})

