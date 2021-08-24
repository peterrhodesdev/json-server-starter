const jsonServer = require("json-server");
const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const router = jsonServer.router("db.json");
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
