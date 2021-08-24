var args = process.argv.slice(2);

const dbJsonFile = 'db.json';
var routerData;
if (args.length === 1 && args[0] === dbJsonFile) {
  routerData = dbJsonFile;
  console.log('Non-safe HTTP methods will modify the db.json file');
} else {
  const fs = require('fs');
  routerData = JSON.parse(fs.readFileSync(dbJsonFile, 'utf8'));
  console.log('The db.json file will not be modified, any changes will be lost when the server is shut down');
}

const jsonServer = require("json-server");
const server = jsonServer.create();
const middlewares = jsonServer.defaults();
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
