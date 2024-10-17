// console.log("hello everyone! js under execution in node js environment");
// console.log(23+45);


const math=require("./math")

const sum=math.add(10,5);
const difference=math.subtract(10,5)

console.log(`sum:${sum}`);
console.log(`difference:${difference}`);

//core module-http

// const http=require("http");//importing


// const hostname = "127.0.0.1";
// const port = 3000;

// const server = http.createServer((req,res)=>{
//     res.statusCode = 200;
//     res.setHeader ("content-type","text/plain")
//     res.end("hello june batch!")
// })
// server.listen(port,hostname,()=>{
//     console.log(`server is running on http://${hostname}:${port}`)
// });


// console.log('hello everyone!');
// const http =require('http');

// const server = http.createServer((req,res)=>{
//     res.statusCode=200;
//     res.setHeader("content-type","text/plain");
//     res.end('hello everyone!');
// });

// const PORT=3000;
// server.listen(PORT,()=>{
//     console.log(`SERVER IS RUNNING IN PORT AS ${PORT}`)
// });

// //cross-origin-resources-sharing

//core modules
//one of them is http

//?Reading files with node.js(using the fs module)

// const fs = require ('fs')
// //Read a file
// fs.readFile("example.txt","utf-8",(error,data)=>{
//     if (error){
//         console.error("error in reading file:",error)
//         return


//     }
//     console.log("file contents",data);
// });
// !simple server with http module //

//write a module

// const content="we are learning MERN,we need to build e-commerce project for our upcoming jobs";
// fs.writeFile("example.txt","utf-8",(error)=>{
//     if (error){
//         console.error("error in writing file:",error)
//         return


//     }
//     console.log("file written successfully");
// });

//Append content into existing file

// const contentToAppend ="we should practice coding daily!"
// fs.writeFile("example.txt",contentToAppend,(error)=>{
//         if (error){
//             console.error("error in appending writing file:",error)
//             return;
    
    
//         }
//         console.log("file written successfully");
//     });


//Delete a file==unlink a file.

// fs.unlink("example.txt",contentToAppend,(error)=>{
//         if (error){
//             console.error("error in deletion file:",error)
//             return;
        
        
//             }
//             console.log("file deleted successfully");
// });

