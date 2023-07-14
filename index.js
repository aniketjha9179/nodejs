const http = require("http");



 let dataControl =(res,req)=>{
    res.write("<h1>JAY SHREE RAM</h1>");

    res.end();
}




http
  .createServer(dataControl)
  .listen(4500);
