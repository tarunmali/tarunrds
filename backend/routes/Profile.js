const express = require("express");
const router = express.Router();




//////////////////////////////////////////

const Sequelize = require('sequelize');
const sequelize = new Sequelize("codecountry", "doadmin", "AVNS_db0fH5p8YUtIGbNzTOC", {
  host: "db-mysql-nyc3-47654-do-user-12196224-0.b.db.ondigitalocean.com",
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