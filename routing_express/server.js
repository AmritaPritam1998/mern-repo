const express=require("express")
const app=express()

app.get("/user/:id",(req,res)=>{
    const userId=req.params.id;
    const bookId = req.params.bookId;
    req.send (`user Id is :${userId},book Id is : ${bookId}`);
});
app.get("/users/:id?",(req,res)=>{
    const userId=req.params.id|| "No userID provided";
    req.send (`user Id is :${userId}`);
});
const PORT=3000;
app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`);

});