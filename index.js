require("dotenv").config();

const express=require("express");
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const jwt=require("jsonwebtoken");




const jsonData=[
    {
        "name":"user1",
        "title":"First Post"
    },
    {
        "name":"user2",
        "title":"Second Post"
    }
]
app.get("/posts",authenticate,(req,res)=>{
    
    console.log(req.userauth);
    res.json(jsonData.filter(post=>post.name==req.userauth.username));
})
app.post("/login",(req,res)=>{
    //console.log(req.body.username);
   // res.end();

   const user={"username":req.body.username};
   const token= jwt.sign(user,process.env.ACCESS_TOKEN);
   res.json(token);




})
function authenticate(req,res,next)
{
   const authHeaders= req.headers["authorization"];
   const token=authHeaders && authHeaders.split(" ")[1];
   if(token==null) res.sendStatus(401);
   jwt.verify(token,process.env.ACCESS_TOKEN,(err,user)=>{
    if(err) res.sendStatus(403);
    req.userauth=user;
    next();

   })



    //BEARER TOKEN


}
app.listen(3000);
