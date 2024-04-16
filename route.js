const http = require('http');
const url = require('url');
module.exports = http.createServer((req, res) => {
    var userOps = require('./controller.js');
    const reqUrl =  url.parse(req.url, true);
// GET endpoint
  if(reqUrl.pathname == '/api' && req.method === 'GET') {
    console.log('Request type: ' + req.method + ' Endpoint: ' + req.url);
    userOps.getUsers(req, res);
   }
 }
)