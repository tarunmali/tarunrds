
const express = require("express");
const router = express.Router();
const { Users } = require("../models");
const bcrypt = require("bcrypt");
const { validateToken } = require("../middlewares/AuthMiddleware");
const { sign } = require("jsonwebtoken");
const Sequelize = require('sequelize');

const {config}=require('dotenv');

config({path:'backend/config.env'});
///////////////////////////////////////////////////////////////////

const sequelize = new Sequelize("codecountry", "doadmin", process.env.PASSWORD, {
  host: process.env.HOST,
  dialect: "mysql",
  port:"25060"


});


router.put("/", validateToken, async (req, res) => {
  const { oldPassword, newPassword } = req.body;
  console.log("hello");
  
const currentEmail=req.user.email;

const [result, metadata] = await sequelize.query(`SELECT * FROM Users WHERE email='${currentEmail}'`);
console.log(result);
console.log(result[0].password);
console.log(oldPassword);
console.log(newPassword);
if(result[0].password==oldPassword)
{
    res.json("Password changed successfully");
    await sequelize.query(`UPDATE Users SET password='${newPassword}' WHERE email='${currentEmail}'`);
}

else
{
    res.json("You entered incorrect old password");   
}








});

module.exports = router;