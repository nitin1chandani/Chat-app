const express = require("express");
const router = express.router();
router.route("/").post(registerUser);
// router.route('/login',authUser)
module.export = router;
