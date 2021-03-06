var express = require('express')
  , myRidesApi = require('./routes/apps/myRides/api.js')
  , http = require('http')
  , path = require('path')
  , Browser = require('zombie');

var app = express();
var browser = new Browser();

// all environments
app.set('port', process.env.PORT || 3000);
app.use(express.favicon(__dirname + '/public/root/img/favicon.ico'));
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public/root/')));
app.use("/apps", express.static(path.join(__dirname, 'public/apps/')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/api/apps/myRides/bikeRides.json', myRidesApi.bikeRides.list);

app.get('/', function(req, res) {
  if(req.url.indexOf("_escaped_fragment_") != -1) {
    browser.visit('http://localhost:' + app.get('port') + '/', function () {
      res.send(browser.html('html'));
    });
  } else {
    res.sendfile(__dirname + '/public/root/index.html');
  }
});
app.get('/apps', function(req, res) {
  if(req.url.indexOf("_escaped_fragment_") != -1) {
    browser.visit('http://localhost:' + app.get('port') + '/apps', function () {
      res.send(browser.html('html'));
    });
  } else {
    res.sendfile(__dirname + '/public/root/index.html');
  }
});
app.get('/connect', function(req, res) {
  if(req.url.indexOf("_escaped_fragment_") != -1) {
    browser.visit('http://localhost:' + app.get('port') + '/connect', function () {
      res.send(browser.html('html'));
    });
  } else {
    res.sendfile(__dirname + '/public/root/index.html');
  }
});
app.get('/apps/myRides', function(req, res) {
  if(req.url.indexOf("_escaped_fragment_") != -1) {
    browser.visit('http://localhost:' + app.get('port') + '/apps/myRides', function () {
      res.send(browser.html('html'));
    });
  } else {
    res.sendfile(__dirname + '/public/root/index.html');
  }
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
