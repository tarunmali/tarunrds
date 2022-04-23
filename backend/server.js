const express=require('express');
const app=express();
const mongoose= require('mongoose');
const bcrypt=require('bcrypt');
const db=require('./models')
var cors = require('cors')
const mysql=require('mysql2');

//Create connection
const db2 = mysql.createConnection({
    host     : "aws-simplified.ctvxs2sfgoaz.us-west-1.rds.amazonaws.com",
    user     : 'admin',
    password : "Welcome2011",
    //Specify database here if you want to use it otherwise if you want to create a new database
    //then dont write the database: thingy here 
     database : 'codecountry'


  });


  db2.connect((err) => {
    if (err) {
      throw err;
    }
    console.log('MySql Connected...');
  });


// const mysql=require('mysql');
// dotenv.config({path:'./config.env'});

app.use(express.json());
app.use(cors())
 

const commentsRouter=require('./routes/Comments');
app.use("/comments", commentsRouter)


const postRouter = require("./Api/Posts");
app.use("/Api/posts", postRouter);

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});






//middleware
app.use(express.json({extended:false}));


app.use('/Api/User', require('./Api/User'));
app.use('/Api/signin', require('./Api/signin'));



const Port= process.env.PORT || 3001;
db.sequelize.sync().then(() => {
    app.listen(Port, () => {
      console.log("Server running on port 3001");
    });
  });








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

module.exports=db2;


