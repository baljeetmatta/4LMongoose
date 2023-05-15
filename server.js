const express=require("express");
const app=express();
const mongoose=require("mongoose");
const Users=require("./models/userModel");

mongoose.connect("mongodb://localhost:27017/BatchMongodb")
.then(result=>{
    console.log("Connected");
}).catch(err=>{
    console.log("Issue in connecting",err);
})

app.get("/saveData",(req,res)=>{

let obj={"email":"test@gmail.com",
"password":"password"};

const userObj=new Users(obj);
userObj.FullName="Dummy Name";
console.log("First:",userObj.firstName,"Last:",userObj.lastName);

/*
userObj.save().then(result=>{
    console.log(result);
    res.end();
})

*/
res.end();


})



app.listen(3000);
