const express=require('express');
const jwt=require('jsonwebtoken');
const User=require('../DB/User');
const route=express.Router();
const bcrypt=require('bcrypt');
const db=require('../server.js');

// ReferenceError: require is not defined in ES module scope, you can use import instead


// import express from 'express';
// import jwt from 'jsonwebtoken';
// import User from '../DB/User';
// import route from 'express.Router';
// import bcrypt from 'bcrypt';




    //login route
     route.post('/',async(req,res)=>{

        // res.send("Tarun Mali signin")

         let token;
        const {email, password}=req.body;
        if (email==="" || password==="") {
           return res.status(422).json({error:"Please fill all the fields"}); 
       }

    //    const userLogin= await User.findOne({email:email});
        
        db.query(`SELECT * FROM user WHERE email='${email}' `,(err,result)=>{
            if(err) throw err;
            if(result.length>0)
            {
                console.log(result);
                const user=result[0];
                console.log(user);

                if(password==user.password)
                {
                    res.status(200).json({message:"User logged in successfully"});

                }

                // if(bcrypt.compareSync(password, user.password)){
                //     token=jwt.sign({_id:user._id}, 'secretkey');
                //     console.log(token);
                //     res.header('auth-token', token).send(token);
                // }
                // else{
                //     return res.status(422).json({error:"Password does not match"});
                // }
            else
            {
                return res.status(422).json({error:"Incorrect Password"});
            }

            }
            else{
                return res.status(422).json({error:"User does not exist"});
            }

        });



        // if(!userLogin){
        //     return res.status(422).json({error:"User does not exist"});
        // }
        // else{
        //     token= await userLogin.generateAuthToken();

        //     res.cookie('taruncookie',token,{
        //         expires:new Date(Date.now()+25892000000),
        //         httpOnly:true
        //     });
        //     //30 days in milliseconds
        //     //so that it works also on http, else it wil work only on https

        //     const isMatch=await bcrypt.compare(password,userLogin.password);
        //     if(!isMatch){
        //         return res.status(422).json({error:"Password is incorrect"});
        //     }
        //     else{
        //         res.json({message:"User logged in successfully"});
        //     }


     
     });


module.exports=route;