// var http = require('http');
// http.createServer(function (request, response) {
//   response.writeHead(200, {'Content-Type': 'text/plain'});
//   response.end('Hello World');
// }).listen(8081);

// console.log('Server running at http://127.0.0.1:8081/');


const http = require('http');
http.createServer((req, res) => {
    console.log('输入数据', req.url);
    res.writeHead(404, {'Content-Type': 'text/html;charset="utf-8"'});
    res.write('<head><meta charset="utf-8"></head>');
    res.write('hello my node test数据');
    res.end();
}).listen(8619);