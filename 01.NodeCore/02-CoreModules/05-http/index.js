const http = require('http');

// const server = http.createServer((req,res)=>{
// res.write("hello server created");
// res.end()
// })
// const server = http.createServer((req,res)=>{
//     res.writeHead(200, {'Content-Type': 'text/plain'});

//     res.write("hello server created");
//     res.end()
//     })
    const server = http.createServer((req,res)=>{
        res.writeHead(200, {'Content-Type': 'text/html'});
    
        res.write("<h1>Hello server</h1>");
        res.end()
        })
server.listen(3004 );