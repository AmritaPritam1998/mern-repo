const express=require("express")
const app=express()

//parse the incoming request from frontend
//(json to js object)
app.use(express.json());


let items=[
    {id:1,name:"item 1",description:"this is item 1"},
    {id:2,name:"item 2",description:"this is item 2"},
    {id:3,name:"item 3",description:"this is item 3"},
    {id:4,name:"item 4",description:"this is item 4"},
];
"/items"
app.get("/items",(req,res)=>{
    res.json(items);
    

});
app.get("/items/:id",(req,res)=>{
    const itemId=parseInt(req.params.id);
    const item=items.find((item)=>item.id===itemId);
    if(item){
        res.json(item)
    }else{
        res.status(404).json({message:"item not found"});
    }
});
app.put("/items/:id",(req,res)=>{
    const itemId=parseInt(req.params.id);
    const item=items.find((item)=>item.id===itemId);
    if(item){
        item.name=req.body.name||item.name;
        item.description=req.body.description||item.description;
        res.json(item);
    }else{
        res.status(404).json({message:"item not found"});
    }

});
app.delete("/items/:id",(req,res)=>{
    const itemId=parseInt(req,params.id);
    const itemIndex=items.findIndex((item)=>item.id===itemId);
    // console.log(itemIndex);

    if(itemIndex !== -1){
        const deletedItem=items.splice(itemIndex,1);
        res.json(deletedItem);
    }else{
        res.status(404).json({message:"items not found"});
    }
});
app.post("/items",(req,res)=>{
    const newItem={
        id:items.length+1,
        name:req.body.name,
        description:req.body.description,
    };
    items.push(newItem);
    res.status(201).json(newItem);
});
const PORT=3000;
app.listen(PORT,()=>{
    console.log(`SERVER IS RUNNING ON PORT ${PORT}`);

});