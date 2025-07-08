const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 3000;


const { createBlog, getAllBlogs } = require("./Controller/BlogController");


app.use(express.json());


mongoose.connect(
  "mongodb+srv://chaubeyankit3449:BRjW4U7zgbSsKR5r@cluster0.b2s9f.mongodb.net/sample_mflix?retryWrites=true&w=majority&appName=Cluster0"
)
.then(() => {
  console.log("DB connected");
})
.catch((err) => {
  console.error("DB connection error:", err);
});


app.post("/blog", createBlog);
app.get("/blog", getAllBlogs);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});