const express=require("express");
const app=express();
const mongoose=require("mongoose");
const path=require("path");
const User=require("./models/user");
let userRouter=require("./routes/users");
mongoose.connect("  mongodb://127.0.0.1:27017/users",(err)=>{
    console.log(err?"Not responding":"connection is successfully")
});

// all the middelwares
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:false}));
app.use("/users",userRouter);

// listening the request on the 2K22 port
app.listen(2022, () => {
    console.log("Server is listening on the port 2K22");
  });
