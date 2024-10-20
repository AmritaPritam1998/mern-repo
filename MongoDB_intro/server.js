const express= require("express")
const mongoose = require("mongoose")
const app = express()

app.use(express.json());

mongoose.connect("mongodb+srv://amritapritamnitn:<db_password>@cluster0.peo1d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=> console.log("Connected to MongoDb"))
.catch((err) =>
    console.error("Failed to connect to MongoDB:",err));
const port =3000;
app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
});



