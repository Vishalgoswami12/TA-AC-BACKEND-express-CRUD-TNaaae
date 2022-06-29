var express=require("express");
const { appendFile } = require("fs");
var path = require("path");
var mongoose =("mongoose");
var userRouter=require("./routes/users");

//connect to database

mongoose.connect("mongodb://127.0.0.1:27017/user-diary3",{
    useNewUrlParser :true,
    useUnifiedTopology:true
},
(err)=>{
    console.log(err ? 'connected false' : 'connected true');
}
)
var express=express();

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.urlencoded({extended:false}));

app.get("/",(req,res)=>{
    res.render("/users",userRouter);
})

app.use((req,res,next)=>{
    res.status(404).send("page not found")
})

app.use((err,req,res,next) => {
    res.send(err);
})


app.listen(3000,() =>{
    console.log('Server is listening on port 3k');
});
