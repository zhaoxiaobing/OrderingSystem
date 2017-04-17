let express = require('express');
let path = require('path');
let fs = require('fs');
let favicon = require('serve-favicon');
let logger = require('morgan');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');



let app = express();

let privateKey  = fs.readFileSync('/study/cert/213993650550770.pem', 'utf8');
let certificate = fs.readFileSync('/study/cert/213993650550770.key', 'utf8');
let credentials = {key: privateKey, cert: certificate};

let httpServer = http.createServer(app);
let httpsServer = https.createServer(credentials, app);
let PORT = 443;
let SSLPORT = 443;

/*httpServer.listen(PORT, function() {
    console.log('HTTP Server is running on: http://localhost:%s', PORT);
});*/
httpsServer.listen(SSLPORT, function() {
    console.log('HTTPS Server is running on: https://localhost:%s', SSLPORT);
});



// catch 404 and forward to error handler
/*app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});*/


app.get('/', function (req,res) {
   res.send('123');
});



