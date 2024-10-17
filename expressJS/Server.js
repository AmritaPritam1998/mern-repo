const express=require("express");
const app = express()

// build a simple API

app.get("/",(req,res)=>{
    res.send("hello world from express!");
});

const PORT =6000;
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
});