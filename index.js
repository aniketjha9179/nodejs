const path = require('path')

const express = require("express");

const app = express();

const publicPath = path.join(__dirname, "public")


// app.use(express.static(publicPath))
app.get('',(_r,res)=>{
res.sendFile(`${publicPath}/home.html`)
})

app.get('/about',(_r,res)=>{
  res.sendFile(`${publicPath}/about.html`)
  })
  app.get('/help',(_r,res)=>{
    res.sendFile(`${publicPath}/help.html`)
    })

    app.get('*',(_r,res)=>{
      res.sendFile(`${publicPath}/nopage.html`)
      })
app.listen(5000);
