// all stand alone routes are going to be handled  here 
const express = require('express');
const router = express.Router();

router.get('/' , (req ,res)=>{
    res.send('<h1>Welcome to Behind the scene </h1>');
})

module.exports = router;
