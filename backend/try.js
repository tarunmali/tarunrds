// // server.js

// import { config } from 'dotenv';
// // config();
// // const config = require('dotenv');
// config({path:'./config.env'});


const {config}=require('dotenv');

config({path:'./config.env'});

console.log(`Your port is ${process.env.HOST}`); // 8626