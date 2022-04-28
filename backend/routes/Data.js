const express = require("express");
const router = express.Router();
const { Posts, Likes,Users, Comments } = require("../models");
const {validateToken}=require("../middlewares/AuthMiddleware")

const Sequelize = require('sequelize');
const sequelize = new Sequelize("codecountry", "admin", "Welcome2011", {
    host: "aws-simplified.ctvxs2sfgoaz.us-west-1.rds.amazonaws.com",
    dialect: "mysql",
  });


router.get("/", async (req, res) => {
    const [result, metadata] = await sequelize.query("select count(*) from Users;");
    const data=result[0]["count(*)"];
    // console.log(result[0]["count(*)"]);
    console.log("MaliMali");
    console.log(data);
    res.json(data);


    // console.log("Tarun");
    // console.log(data);
//   res.json(data);

});

router.get("/byId/:id", async (req, res) => {
  const id = req.params.id;
  const post = await Posts.findByPk(id);
  res.json(post);
});





module.exports = router;