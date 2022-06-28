let express=require("express");
let app=express();
let path=require("path");
let userRouter=require("./routes/users");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use("/users",userRouter);
app.listen(2000 , ()=>{
    console.log('server is listening on the port 2k2 ');
})