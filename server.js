var express = require('express');
var app = express()

app.get('/',(req,res)=>{
    res.send('hello bitch!!')
})

app.listen(4000,()=>{
    console.log('App is running on Port 4000');
})