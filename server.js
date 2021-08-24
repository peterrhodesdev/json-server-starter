const jsonServer = require("json-server");
const server = jsonServer.create();
const middlewares = jsonServer.defaults();
var jsonData = module.require("./db.js")
const router = jsonServer.router(jsonData);
const portNumber = 3000;

server.use(middlewares);
server.use(
  jsonServer.rewriter({
    "/api/v1/*": "/$1",
  })  
);
server.use(router);
server.listen(portNumber, () => {
  console.log(`JSON Server is running on port ${portNumber}`);
});
