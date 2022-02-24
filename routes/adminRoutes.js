const express = require("express");
const passport = require("passport");
const controller = require("../controllers/adminController");

const router = express.Router();

router.use(passport.authenticate("jwt", { session: false }));

router.post("/balance", controller.accountBalance);
router.patch("/update", controller.updateUser);
router.delete("/delete", controller.deleteUser);

module.exports = router;
