const express = require("express");
const router = express.Router();
const { Posts, Likes,Users, Comments } = require("../models");
const {validateToken}=require("../middlewares/AuthMiddleware")

const Sequelize = require('sequelize');

///////////////////////////////////////////////////////////


const sequelize = new Sequelize("codecountry", "doadmin", "AVNS_db0fH5p8YUtIGbNzTOC", {
  host: "db-mysql-nyc3-47654-do-user-12196224-0.b.db.ondigitalocean.com",
  dialect: "mysql",
  port:"25060"


});


router.get("/", async (req, res) => {
    const [result1, metadata1] = await sequelize.query("select count(*) from Users;");
    

    const users=result1[0]["count(*)"];
    const [result2, metadata2] = await sequelize.query("select count(*) from Comments;");
    const comments=result2[0]["count(*)"];
    const [result3, metadata3] = await sequelize.query("select count(*) from Likes;");
    const likes=result3[0]["count(*)"];
    const [result4, metadata4] = await sequelize.query("select count(*) from Posts;");
    const posts=result4[0]["count(*)"];

    //Sent the above data to the frontend
    res.json({users,comments,likes,posts});



    // console.log("Tarun");
    // console.log(data);
//   res.json(data);

});







module.exports = router;