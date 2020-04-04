import http from "http";
import serverless from 'serverless-http';

http.createServer(function(req, res) {
  // Homepage
  if (req.url === "/") {
    try{
      http.get("http://localhost:9000/.netlify/functions/fetch", function(res) {
      console.log(res);
      res.pipe(process.stdout);
    });
    }
    catch (e) {
      console.log(e)
    }
    res.end("Welcome to the homepage!");
  }

  // About page
  else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("Welcome to the about page!");
  }

  // 404'd!
  else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 error! File not found.");
  }
}).listen(1337, "localhost");