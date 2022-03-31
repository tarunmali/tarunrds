const express=require('express');
const jwt=require('jsonwebtoken');
const User=require('../DB/User');
const route=express.Router();
const bcrypt=require('bcrypt');



    //login route
     route.post('/',async(req,res)=>{

        // res.send("Tarun Mali signin")

         let token;
        const {email, password}=req.body;
        if (email==="" || password==="") {
           return res.status(422).json({error:"Please fill all the fields"}); 
       }

       const userLogin= await User.findOne({email:email});


        if(!userLogin){
            return res.status(422).json({error:"User does not exist"});
        }
        else{
            token= await userLogin.generateAuthToken();

            res.cookie('taruncookie',token,{
                expires:new Date(Date.now()+25892000000),
                httpOnly:true
            });
            //30 days in milliseconds
            //so that it works also on http, else it wil work only on https

            const isMatch=await bcrypt.compare(password,userLogin.password);
            if(!isMatch){
                return res.status(422).json({error:"Password is incorrect"});
            }
            else{
                res.json({message:"User logged in successfully"});
            }

        }



        
        
        



        
    })
     
    


module.exports=route;