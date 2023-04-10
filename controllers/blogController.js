const Blog = require("../models/blog");

const blogs = (req, res) => {
  Blog.find()
    .then((result) => res.render("blogs", { title: "My blog", blogs: result }))
    .catch((err) => console.log(err));
};
const blog_details = (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then((result) => {
      res.render("blog", { title: result.title, blog: result });
    })
    .catch((err) => console.log(err));
};
const blog_delete = (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndDelete(id)
    .then(() => res.json({ redirect: "/blogs" }))
    .catch((err) => console.log(err));
};

const blog_add = (req, res) => {
  const blog = new Blog(req.body);
  blog
    .save()
    .then(() => res.redirect("/blogs"))
    .catch((err) => console.log(err));
};
module.exports = { blogs, blog_details, blog_delete,blog_add };

