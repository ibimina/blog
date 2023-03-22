const express = require('express');

const app =express()
app.set('view engine', 'ejs');

//basic routing
app.get('/',(req,res)=>{
    res.render('index')
})