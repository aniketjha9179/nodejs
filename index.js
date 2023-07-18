const express = require("express");
const app = express();

app.get("", (req, res) => {
  console.log('data send by browser-------- b>', req.query.name);
  res.send(" welcome , hello , this is Home Page");
});

app.get("/about", (req, res) => {
    res.send("hello , this is About Page");
  });
  app.get("/help", (req, res) => {
    res.send({
      name:'aniket',
      email:'ani@gmail.com'
    });
  });
  app.get("/wedss", (req, res) => {
    res.send("hello , this is weds Page");
  });

  app.listen(5000)