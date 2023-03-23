const express = require('express');
const mongoose = require('mongoose');
const dotenv = require("dotenv");
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

//basic routing
app.get('/',(req,res)=>{
    const blogs =[{
        title: 'Ibimina starts a blog',
        snippet: 'Lorem ipsum dolor sit amet consectetur'
    },
    {
        title: 'Node js is the best',
        snippet: 'Lorem ipsum dolor sit amet consectetur'
    },
    {
        title: 'How to defeat bowser',
        snippet: 'Lorem ipsum dolor sit amet consectetur'
    }

]
    res.render('index',{title: 'Home', blogs});
})

app.get("/about", (req, res) => {
  res.render("about");
});

app.use( (req, res) => {
  res.render("404");
});