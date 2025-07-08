const Blog = require("../models/BlogSchema");

exports.createBlog = async (req, res) => {
  const { title, postedBy, content } = req.body;

  if (!title || !postedBy || !content) {
    return res.status(400).json({ error: "Title, postedBy, and content parameters are required" });
  }


  try {
    const newPost = new Blog({ title, postedBy, content });
    await newPost.save();
    res.status(201).json({ message: "Blog post created", post: newPost });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.getAllBlogs = async (req, res) => {
  try {
    const posts = await Blog.find();
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};