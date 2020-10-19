const router = require("express").Router();
//bcrypt
const bcrypt = require('bcrypt');
//db
const pool = require('../db');
//SignUp
router.post("/signup", async (req, res) => {
    try {
        const { username, userpass, email } = req.body;
        const user = await pool.query("select * from _user where username=$1", [req.body.username]);

        if (user.rowCount != 0) {
            console.log("Tên đăng nhập đã tồn tại");
            return res.status(500).json({
                "message": "Tên đăng nhập đã tồn tại !!!",
            });
        }
        const saltRounds = 10;
        bcrypt.hash(userpass, saltRounds).then(async function (hash) {
            await pool.query("insert into _user(username,userpass,email) values($1,$2,$3) returning *", [username, hash, "tanloci9@gmail.com"]);
            return res.status(200).json({
                "message": "Đăng ký thành công !",
            });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            "message": "Fail",
        });
    }
})
module.exports = router;