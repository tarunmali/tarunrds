const express=require('express');
const connectDB=require('./DB/Connection');
const app=express();
const mongoose= require('mongoose');
const bcrypt=require('bcrypt');
const db=require('./models')
var cors = require('cors')

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




connectDB();

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




