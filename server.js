const https = require('https');
const jsonServer = require('json-server');
const fs = require('fs');

// Private Key and certificate (Autosigned)
const options = {
  key: fs.readFileSync('./certs/key.key'),
  cert: fs.readFileSync('./certs/cert.crt')
};

const server = jsonServer.create();
//Database
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

https.createServer(options, server).listen(3000, () => {
  console.log('JSON Server is running on https://localhost:3000');
});
