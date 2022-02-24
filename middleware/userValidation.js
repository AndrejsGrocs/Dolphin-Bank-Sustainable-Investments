const { body, validationResult } = require("express-validator");
const { capitalizeFirstLetter } = require("./../helpers/sanitizationHelper");

module.exports.userValidator = [
  body("firstname")
    .exists()
    .trim()
    .isAlphanumeric("de-DE")
    .withMessage("firstname should be alphanumeric")
    .isLength({ min: 1, max: 50 })
    .withMessage(
      "firstname should not be empty, should be more than one and less than 50 characters"
    ),
  function (req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ titel: "Validation errors firstname", error: errors });
    }
    next();
  },
  body("lastname")
    .exists()
    .trim()
    .isAlphanumeric("de-DE")
    .withMessage("lastname should be alphanumeric")
    .isLength({ min: 1, max: 50 })
    .withMessage(
      "lastname should not be empty, should be more than one and less than 50 characters"
    ),
  function (req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ titel: "Validation errors lastname", error: errors });
    }
    next();
  },

  body("email")
    .exists()
    .trim()
    .isEmail()
    .withMessage("This is not a valid email"),
  function (req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ title: "Validation errors email", error: errors });
    }
    next();
  },
  body("PIN").exists().isNumeric().isLength({ min: 4, max: 4 }),
  // .withMessage("Please enter your 4 digits PIN"),
  function (req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ title: "Validation errors PIN", error: errors });
    }
    next();
  },
];

module.exports.sanitizeUser = [
  body("email").normalizeEmail(),
  function (req, res, next) {
    req.body.firstname = capitalizeFirstLetter(req.body.firstname);
    req.body.lastname = capitalizeFirstLetter(req.body.lastname);

    next();
  },
];
