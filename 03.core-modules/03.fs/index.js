//read files
var fs = require('fs');

// fs.readFile("example.txt",(e,d)=>{
//     if(e){
//         console.log(e)
//     }else{
//         console.log(d)//Buffer 68 65 6c 6c 6f 20 55 6d 61 6b 61 6e 74 68 20 4b 61 73 70 61 0a 0a 68 65 6c 6c 6f 20 76 61 6d 73 68 69>
//     }
// })
fs.readFile("example.txt",'utf8',(e,d)=>{
    if(e){
        console.log(e)
    }else{
        console.log(d)
    }
})
fs.readFile("index.html",'utf8',(e,d)=>{
    if(e){
        console.log(e)
    }else{
        console.log(d)
    }
})

//create files
fs.writeFile('test.txt', 'utf8',(e,d)=>{
    if(e){
        console.log(e)
    }else{
        console.log("file created")
    }
})

// update files
fs.appendFile('test.txt','iam from Nizamabad',(e)=>{
    if(e){
        console.log(e)
    }else{
        console.log("file Updated")
    }
})



//rename files
fs.rename('test.txt','newfile.txt',(e)=>{
    if(e){
        console.log(e)
    }else{
        console.log("rename successfull")
    }
})

//delete files
fs.unlink('delete.txt',(e)=>{
    if(e){
        console.log(e)
    }else{
        console.log("file deleted")
    }
})