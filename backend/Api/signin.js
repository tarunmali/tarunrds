const express=require('express');
const route=express.Router();
const bcrypt=require('bcrypt');
const db=require('../server.js');
const Sequelize = require('sequelize');
const { QueryTypes } = require('sequelize');
const sequelize = new Sequelize("codecountry", "admin", "Welcome2011", {
    host: "aws-simplified.ctvxs2sfgoaz.us-west-1.rds.amazonaws.com",
    dialect: "mysql",
  });
const {sign}= require('jsonwebtoken')


    //login route
     route.post('/',async(req,res)=>{
        let token;
        const {email, password}=req.body;
        if (email==="" || password==="") 
        {
           return res.status(422).json({error:"Please fill all the fields"}); 
        }

       const [result, metadata] = await sequelize.query(`SELECT * FROM Users WHERE email="${email}"`,{ type: QueryTypes.SELECT });
    
        if(typeof result === 'object')
        {
            if(password==result.password)
            {
                const name=result.name;
                // console.log("TM");
                // console.log(name);
                const accessToken=sign({email:email, name:name},"maybegeneraterandomly");
                
                res.status(200).json({accessToken:accessToken});

            }
            else
            {
                return res.status(422).json({error:"Incorrect Password"});
            }
        }
        else
        {
            return res.status(422).json({error:"User does not exist"});
        }


      });

module.exports=route;

