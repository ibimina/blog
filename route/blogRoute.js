const express = require("express")
const router = express.Router()
const blogController = require("../controllers/blogController")

router.post("/blogs", blogController.blog_add);

router.get("/blog/:id", blogController.blog_details);

router.delete("/blog/:id", blogController.blog_delete);

router.get("/blogs", blogController.blogs);


module.exports= router