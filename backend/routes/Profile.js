const express = require("express");
const router = express.Router();

const {config}=require('dotenv');

config({path:'backend/config.env'});


//////////////////////////////////////////

const Sequelize = require('sequelize');
const sequelize = new Sequelize("codecountry", "doadmin", process.env.PASSWORD, {
  host: process.env.HOST,
  dialect: "mysql",
  port:"25060"


});


router.get("/:pid", async (req, res) => {
    const pid=req.params.pid;
    console.log(pid);
    const [result, metadata] = await sequelize.query(`select * from Users where id=${pid} ;`);
    res.json(result);
});







module.exports = router;