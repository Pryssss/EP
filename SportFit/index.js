const http = require('http')
const fs = require('fs')


http.createServer((req, res) =>{
    switch (req.url) {
        case '/':
            res.writeHead(200,{'Content-Type':'text/html'});
            let myFileHtml = fs.readFileSync('index.html');
            res.end(myFileHtml);
        case '/app.css':
            res.writeHead(200,{'Content-Type':'text/css'});
            let myFileCss = fs.readFileSync('vendor/bootstrap/css/bootstrap.min.css');
            res.end(myFileCss);
        case '/app.cssMin':
            res.writeHead(200,{'Content-Type':'text/css'});
            let myFileCssMin = fs.readFileSync('css/creative.css');
            res.end(myFileCssMin);
        case '/app.js2':
            res.writeHead(200,{'Content-Type':'text/js'});
            let myFilejs2 = fs.readFileSync('vendor/bootstrap/js/bootstrap.min.js');
            res.end(myFilejs2);
        case '/app.js3':
            res.writeHead(200,{'Content-Type':'text/js'});
            let myFilejs3 = fs.readFileSync('js/creative.min.js');
            res.end(myFilejs3);
        case '/app.js4':
            res.writeHead(200,{'Content-Type':'text/js'});
            let myFilejs4 = fs.readFileSync('main.js');
            res.end(myFilejs4);
        default:
            res.writeHead(404,{'Content-Type':'text/plain'});
            res.end('404 Не знайдено');
    }
}).listen(3000,() =>{console.log('Server has been started....')});
