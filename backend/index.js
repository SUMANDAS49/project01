const express=require("express")
const app=express()

const port=8000||PORT

app.get("/",(req,res)=>{
    res.status(200).json({
        message:"hello and welcome"
    })
})

app.listen(port,()=>{
    console.log("server is running")
})