const url = require('url');
const api = require('./api.js');
exports.getUsers = function(req, res) {
  const reqUrl = url.parse(req.url, true)
  var response = [
    api
  ];
  res.statusCode = 200;
  res.setHeader('content-Type', 'Application/json');
  res.end(JSON.stringify(response))
 }