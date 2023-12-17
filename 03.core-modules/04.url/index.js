const url = require('url');

const a = 'http://127.0.0.1:3004/index.html?name=umakanth&age=23';

var b = url.parse(a, true);
console.log(b);
console.log(b.port)
console.log(b.host); 
console.log(b.pathname);
console.log(b.search); 
console.log(b.query);
