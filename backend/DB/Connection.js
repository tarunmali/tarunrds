const mongoose = require('mongoose');
const dotenv=require('dotenv');
dotenv.config({path:'./config.env'});

const URL=process.env.DATABASE;
const connectDB = async () => {
    await mongoose.connect(URL,{useUnifiedTopology: true,useNewUrlParser: true});
    console.log('MongoDB Connected...');
}

module.exports=connectDB;