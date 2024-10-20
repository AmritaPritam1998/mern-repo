const express=require("express")
const app=express()

app.set("view engine","ejs");

app.use(express.static("public"));

app.get("/",(req,res)=>{
    const data={
        title:"Welcome to MY Ejs Project",
        user:{
            name:"Amrita",
            age:28,
            hobbies:["Travelling","reading","cooking","Trekking"]
        }
    }
    res.render("index",data);
})

const PORT=3000;
app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`);
});