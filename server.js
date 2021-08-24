var args = process.argv.slice(2);
console.log('args: ', args);

const dbJsData = module.require('./db.js');
const dbJsonData = './db.json';
var routerData;
if (args.length === 1 && args[0] === 'db.json') {
  routerData = dbJsonData;
  console.log('Non-safe HTTP methods will modify the db.json file');
} else {
  routerData = dbJsData;
  console.log('The db.json file will not be modified, any changes will be lost when the server is shut down');
}

const jsonServer = require("json-server");
const server = jsonServer.create();
const middlewares = jsonServer.defaults();

//var jsonData = module.require("./db.js")
const router = jsonServer.router(routerData);

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
