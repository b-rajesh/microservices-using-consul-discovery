var express = require('express')
const morgan = require('morgan');
var http = require('http')
var https = require('https')
var app = express()
const os = require('os');
const jwt = require('jsonwebtoken');
var concat = require('concat-stream');

app.set('json spaces', 2);
app.set('trust proxy', ['loopback', 'linklocal', 'uniquelocal']);

app.use(morgan('combined'));

app.use(function(req, res, next){
  req.pipe(concat(function(data){
    req.body = data.toString('utf8');
    next();
  }));
});

app.get('/hello-nginxplus-api/health', (req, res) => {
  res.send({ hello: 'I am fine' });
});

app.all('/hello-nginxplus-api', (req, res) => {
  const echo = {
    path: req.path,
    headers: req.headers,
    method: req.method,
    body: req.body,
    cookies: req.cookies,
    fresh: req.fresh,
    hostname: req.hostname,
    ip: req.ip,
    ips: req.ips,
    protocol: req.protocol,
    query: req.query,
    subdomains: req.subdomains,
    xhr: req.xhr,
    os: {
      hostname: os.hostname()
    },
    connection: {
      servername: req.connection.servername
    }
  };
  res.json(echo);
  console.log('-----------------')
});

var httpServer = http.createServer(app).listen(process.env.HTTP_PORT || 3000);

let calledClose = false;

process.on('exit', function () {
  if (calledClose) return;
  console.log('Got exit event. Trying to stop Express server.');
  server.close(function() {
    console.log("Express server closed");
  });
});

process.on('SIGINT', shutDown);
process.on('SIGTERM', shutDown);

function shutDown(){
  console.log('Got a kill signal. Trying to exit gracefully.');
  calledClose = true;
  httpServer.close(function() {
    httpsServer.close(function() {
      console.log("HTTP and HTTPS servers closed. Asking process to exit.");
      process.exit()
    });
    
  });
}
