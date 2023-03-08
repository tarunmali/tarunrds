const express=require('express');
const route=express.Router();
const Sequelize = require('sequelize');
const { QueryTypes } = require('sequelize');
const {Users}=require('../models');
const {validateToken}=require("../middlewares/AuthMiddleware")


///////////////////////////////////////////////////////////////////////////////
const {config}=require('dotenv');
config({path:'backend/config.env'});

const sequelize = new Sequelize("codecountry", "doadmin", process.env.PASSWORD, {
    host: process.env.HOST,
    dialect: "mysql",
    port:"25060"


  });


  




route.post('/',async(req,res)=>
{
    const {name, email, phone, work, password, cpassword}=req.body;
    if (name==="" || email===""  || work==="" || password==="" || cpassword==="" || phone==="") 
    {
       return res.status(422).json({error:"Please  fill all the fields"}); 
    }
    const [result, metadata] = await sequelize.query(`SELECT * FROM Users WHERE email='${email}'`, { type: QueryTypes.SELECT });

    console.log();
if(typeof result === 'object')
{
    return res.status(422).json({error:"User already exists"});
}

else
{
    if(password!==cpassword)
    {
        return res.status(422).json({error:"Password does not match"});
    }
    else
    {


        let sql=`INSERT INTO Users (name,email,phone,work,password) VALUES ("${name}","${email}","${phone}","${work}","${password}");`;
        await sequelize.query(sql);
        res.status(200).json({ message: "user registered successfuly" });


    }
  }
})

module.exports=route;