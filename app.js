let fs = require('fs');
let https = require('https');


const options = {
  key: fs.readFileSync('/study/cert/213993650550770.key'),
  cert: fs.readFileSync('/study/cert/213993650550770.pem')
};


//let httpsServer = https.createServer(credentials, app);
let ssl_port = 443;



https.createServer(options, (req, res) => {
    res.writeHead('200');
    res.end('hello world!\n');
}).listen(ssl_port);

//httpsServer.listen(ssl_port, function() {
//    console.log('HTTPS Server is running on: https://localhost:%s', ssl_port);
//});









