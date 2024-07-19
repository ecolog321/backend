const http = require("http");
const fs = require("fs");
const path = require("path");

const getUsers = () => {
  const filePath = path.join(__dirname, "./data/users.json");
  return fs.readFileSync(filePath);
};

const server = http.createServer((request, response) => {
  const ipAddress = "http://127.0.0.1:3003";
  const url = new URL(request.url, ipAddress);
  const userName = url.searchParams.get("hello");

  if (request.url === "/users") {
    response.status = 200;
    response.statusMessage = "OK";
    response.header = "content-type: text/plain";
    response.write(getUsers());
    response.end();
    return;
  }

  if (!url.searchParams.has('hello')) {
    response.status = 500;
      response.statusMessage = "ERROR";
      response.header = "content-type: text/plain";
      response.write(`Error`);
      response.end();
      return;
  }

  if (url.searchParams.has("hello")) {
    if (userName) {
      response.status = 200;
      response.statusMessage = "OK";
      response.header = "content-type: text/plain";
      response.write(`Hello, ${userName}`);
      response.end();
    } else {
      response.status = 400;
      response.statusMessage = "OK";
      response.header = "content-type: text/plain";
      response.write(`Enter a name`);
      response.end();
    }
  } else {
    response.status = 200;
    response.statusMessage = "OK";
    response.header = "content-type: text/plain";
    response.write(`Hello worold`);
    response.end();
  }
});

server.listen(3003, () => {
  console.log("Сервер запущен по адресу http://127.0.0.1:3003/");
});
