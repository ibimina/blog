const express = require('express');
const mongoose = require('mongoose');
const dotenv = require("dotenv");
const blogRoute = require("./route/blogRoute")

dotenv.config();

const url = process.env.MONGO_URL;
const app =express()

//connect to mongodb and listen for requests
mongoose.connect(url)
.then(() => app.listen(3000))
.catch((err) => console.log(err));
app.set('view engine', 'ejs');

//middleware and static files
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}))
//basic routing
app.use(blogRoute)

app.get('/',(req,res)=>{
    res.render('index',{title: 'Home'});
})


app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/create", (req, res) => {
  res.render("addblog", { title: "Add new Blog" });
});

app.use( (req, res) => {
  res.render("404", { title: "404" });
});