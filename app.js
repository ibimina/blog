const express = require('express');

const app =express()
app.use(express.static("public"));

app.set('view engine', 'ejs');

app.listen(process.env.PORT || 3000);

//basic routing
app.get('/',(req,res)=>{
    res.render('index')
})

app.get("/about", (req, res) => {
  res.render("about");
});

app.use( (req, res) => {
  res.render("404");
});