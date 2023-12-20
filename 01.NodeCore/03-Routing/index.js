const http = require('http');


    const server = http.createServer((req,res)=>{
        if(req.url =='/'){
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write("<h1>Home</h1>");
            res.end()
        }else if(req.url =='/about'){
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write("<h1>about</h1>");
            res.end()
        }else{
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.write("<h1>Not found</h1>");
            res.end()
        }
        
        })
server.listen(3007);