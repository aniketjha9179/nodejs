const path = require("path");

const express = require("express");

const app = express();

const publicPath = path.join(__dirname, "public");

app.set("view engine", "ejs");

app.get("", (_r, res) => {
  res.sendFile(`${publicPath}/home.html`);
});

app.get("/profile", (_r, res) => {
  const user = {
    name: "aniket",
    city: "bhopal",
    email: "aj@gmail.com ",
    skills: ["php", "js", "nodejs", "java", "cpp", "scala"],
  };

  res.render("profile", { user });
});

app.get('/login',(_r,res)=>{
  res.render('login');
})

app.get("/about", (_r, res) => {
  res.sendFile(`${publicPath}/about.html`);
});
app.get("/help", (_r, res) => {
  res.sendFile(`${publicPath}/help.html`);
});

app.get("*", (_r, res) => {
  res.sendFile(`${publicPath}/nopage.html`);
});
app.listen(5000);
