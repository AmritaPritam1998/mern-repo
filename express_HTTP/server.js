const express=require("express");
const app=express();

app.get("/",(req,res)=>{
    res.send("this is a get request to the homepage");
});
app.post("/submit",(req,res)=>{
    res.send("this is a post request to submit data")
});
app.put("/update/:id",(req,res)=>{
    const {id}=req.params;
    res.send(`put request to update resource with Id:${id}`);
    //!
});
app.delete("/delete/:id",(req,res)=>{
    const {id}=req.params;
    res.send(`put request to update resource with Id:${id}`);

});
app.listen(3000,()=>{
    console.log("hey! server is running on port 3000");


});
//!HTTP status

//?HTTP status code are three-digit codes used to indicate the 
//status of a responses:

//200:ok(sucessful request)
//201:
//400:bad request(invalid request from the client)
//404:not found(resource not found)
//500:internal server error (server error)

//* HTTP headers contain metadata about the request and the response,
//like content type