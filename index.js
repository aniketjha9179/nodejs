const http = require("http");
<<<<<<< HEAD
const data = require("./data");
http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type ": "application/json" });
    res.write(JSON.stringify(data));
    res.end();
  })
=======



 let dataControl =(res,req)=>{
    res.write("<h1>JAY SHREE RAM</h1>");

    res.end();
}




http
  .createServer(dataControl)
>>>>>>> e7bdef569752992d64f326735945f3225d9ff15c
  .listen(4500);
