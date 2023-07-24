// const express = require("express");
// const validateForm = require("../controllers/validateForm");
// const router= express.Router();
// const pool = require("../db.js");
// const bcrypt = require("bcrypt");

// router.post("/login", (req, res) => {
//     validateForm(req, res);
// });

// router.post("/signup", async (req, res) => {
//     validateForm(req, res);

//     const existingUser = await pool.query("SELECT user_id from users WHERE username=$1",
//     [req.body.username]
//     );
//     if(existingUser.rowCount === 0){

//     }else{
//         res.json({loggedIn: false, status: ""})
//     }
// });

// module.exports = router;