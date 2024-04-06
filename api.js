const http = require("http");
const PORT = 5500;
const data = require("./data");
http
  .createServer((req, res) => {
    res.writeHead(200, { "content-type": "applicationjson" });
    res.write(JSON.stringify(data));
    res.write("this is another server");
    res.end();
  })
  .listen(PORT);
