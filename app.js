var express = require('express')
  , myRidesApi = require('./routes/apps/myRides/api.js')
  , http = require('http')
  , path = require('path');

var app = express();

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

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
