const express=require('express');
const connectDB=require('./DB/Connection');
const app=express();
const mongoose= require('mongoose');
const bcrypt=require('bcrypt');


var cors = require('cors')

 
app.use(cors())
 






app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});




connectDB();

//middleware
app.use(express.json({extended:false}));


app.use('/Api/User', require('./Api/User'));
app.use('/Api/signin', require('./Api/signin'));


const Port=process.env.PORT || 3000;

app.listen(Port,()=>console.log(`Server is running on port ${Port}`));



const middleware=(req,res, next )=>{
    console.log('Hello my Middleware');
    next();
}



app.get('/about',middleware, (req, res) => {
    res.send("about");
});


//Learning cookies
app.get('/contact', (req, res) => {
    res.cookie('aboutcookie','123456789')
    res.send("contact");
});

app.get('/signin', (req, res) => {
    res.send("sign in");
});


app.get('/signup', (req, res) => {
    res.send("signup");
});




