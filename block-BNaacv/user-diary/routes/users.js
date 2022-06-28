const express=require("express");
let router=express.Router();




router.get("/",(req,res)=>{
    res.render("users",{list:["sunny","ravi","vishal","abhishek"]})
})

// Create a new user  here we have to display a user form 
router.get("/new",(req,res)=>{
    res.render("userForm")
})
// display a single user here

router.get("/:id",(req,res)=>{
    res.render("singleUser",{name:"vishal",email:"vishalgoswami2250@gmail.com"})
})

router.delete('/:id',(req ,res)=>{
    //   if we have database connectivity then we  can delete the single user data 
})

router.put('/:id',(req ,res)=>{
    // if we have  the database connectivity then we can update the data 
})
module.exports = router;