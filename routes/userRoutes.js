const express = require("express");
const controller = require("../controllers/userController");
const { userValidator, sanitizeUser } = require("../middleware/userValidation");

const router = express.Router();

router.post("/register", userValidator, sanitizeUser, controller.registerUser);
router.post("/login", controller.login);
router.get("/logout", controller.logout);

module.exports = router;
