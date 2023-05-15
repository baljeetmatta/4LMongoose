const mongoose=require("mongoose");
const userSchema=mongoose.Schema({
    "email":String,
    "password":{
        type:String,
        default:"password"
       
    },
    "firstName":String,
    "lastName":String
})
userSchema.virtual("FullName").get(()=>{
    this.firstName+" "+this.lastName;
})

userSchema.virtual("FullName").set(function(name){
   console.log(name);
    let arr=name.split(" ")
    console.log(arr);
   this.firstName=arr[0];
   this.lastName=arr[1];

})
module.exports= mongoose.model("users",userSchema);
