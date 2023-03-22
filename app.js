const express = require('express');

const app =express()
app.use(express.static("public"));

app.set('view engine', 'ejs');

app.listen(process.env.PORT || 3000);

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