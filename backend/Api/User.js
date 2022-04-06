const express=require('express');
const route=express.Router();
const Sequelize = require('sequelize');
const { QueryTypes } = require('sequelize');

const sequelize = new Sequelize("codecountry", "admin", "Welcome2011", {
    host: "aws-simplified.ctvxs2sfgoaz.us-west-1.rds.amazonaws.com",
    dialect: "mysql",
  });

route.post('/',async(req,res)=>
{
    const {name, email, phone, work, password, cpassword}=req.body;
    if (name==="" || email===""  || work==="" || password==="" || cpassword==="" || phone==="") 
    {
       return res.status(422).json({error:"Please  fill all the fields"}); 
    }
    const [result, metadata] = await sequelize.query(`SELECT * FROM user WHERE email='${email}'`, { type: QueryTypes.SELECT });

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
        if(password!==cpassword)
        {
                return res.status(422).json({error:"Password does not match"});
        }
        else
        {

            let sql=`INSERT INTO user (name,email,work,password,phone) VALUES ("${name}","${email}","${work}","${password}",${phone});`;
            await sequelize.query(sql);
            res.status(200).json({ message: "user registered successfuly" });
        }
    }
  }
})

module.exports=route;