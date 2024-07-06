const express=require('express')
const app=express()
app.get('/honey',function(req,res){
    res.send("these are honey products")
})
app.get('/shoes',function(req,res){
    res.send("there are shoes")
})
app.get('/home',function(req,res){
    res.send("this is home page")
})
app.get('/login',function(req,res){
    res.send("this is login page")
})
app.listen(8086)