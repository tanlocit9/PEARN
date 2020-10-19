const express = require("express");
const cors = require('cors');
var app = express();
const port = process.env.PORT || 5000;
const pool = require('./db');

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api/user", require("./routes/loginRoutes"));
//Login
app.post("/login", async (req, res) => {
    try {
        var flag = 1;
        const { username, userpass } = req.body;
        const oldUserName = await pool.query("select username from _user where username=$1", [username]);
        if (oldUserName.rowCount == 0) {
            res.json({
                "message": "Tên đăng nhập không tồn tại !!!",
            });
        }
        else {
            const password = await pool.query("select userpass from _user where username=$1", [username]);
            bcrypt.compare(userpass, password.rows[0].userpass, (err, result) => {
                console.log(result);
                if (err) {
                    return res.json({
                        "message": "Sai mật khẩu nè !",
                    });
                }
                if (result) {
                    return res.json({
                        "message": "Đăng nhập thành công!",
                    });
                }

            })
            flag = 0;
        }
        if (flag == 0)
            res.json({
                "message": "Đăng nhập thất bại!",
            });

    } catch (error) {
        console.error(error);
    }
})
app.listen(port, () => {
    console.log(`Server is listen on port ${port}!`);
});