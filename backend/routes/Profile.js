const express = require("express");
const router = express.Router();
const { Users} = require("../models");
const {validateToken}=require("../middlewares/AuthMiddleware")

const Sequelize = require('sequelize');
const sequelize = new Sequelize("codecountry", "admin", "Welcome2011", {
    host: "aws-simplified.ctvxs2sfgoaz.us-west-1.rds.amazonaws.com",
    dialect: "mysql",
  });


router.get("/:pid", async (req, res) => {
    const pid=req.params.pid;
    console.log(pid);
    const [result, metadata] = await sequelize.query(`select * from Users where id=${pid};`);
    res.json(result);
});







module.exports = router;