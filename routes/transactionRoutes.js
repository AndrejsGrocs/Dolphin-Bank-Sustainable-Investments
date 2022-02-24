const express = require("express");
const passport = require("passport");
const controller = require("../controllers/transactionController");

const router = express.Router();

router.use(passport.authenticate("jwt", { session: false }));

router.patch("/transaction", controller.transaction);
router.get("/history", controller.transactionHistory);

module.exports = router;
