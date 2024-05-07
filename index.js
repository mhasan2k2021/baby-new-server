const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require("./data/categories.json");
const news = require("./data/news.json");

app.get("/", (req, res) => {
  res.send("hello world.");
});

app.get("/category", (req, res) => {
  console.log(categories);
  res.send(categories);
});

app.get("/news", (req, res) => {
  res.send(news);
});

app.get("/news/:id", (req, res) => {
  const id = req.params.id;
  const allNews = news.filter((n) => n._id === id);
  res.send(allNews);
});

app.get("/category/:id", (req, res) => {
  const id = req.params.id;
  if (id === "0") {
    res.send(news);
  }
  const categoryId = news.filter((n) => n.category_id === id);
  res.send(categoryId);
  console.log(categoryId);
});

app.get("/news/:id", (req, res) => {
  const id = req.params.id;
  const selectedNews = news.find((n) => n._id === id);
  res.send(selectedNews);
  console.log(selectedNews);
});

app.listen(port, (req, res) => {
  console.log("this server is running port: ", port);
});
