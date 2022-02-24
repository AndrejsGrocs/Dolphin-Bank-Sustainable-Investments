const { PinEncryptor } = require("pin-encryptor");
const bcrypt = require("bcrypt");
const User = require("./../models/User");
const authenticationHelper = require("./../helpers/authenticationHelper");
const accountNumberHelper = require("./../helpers/accountNumberHelper");

exports.registerUser = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const PIN = req.body.PIN;
    // console.log(PIN);
    const formattedPIN = await PinEncryptor.format2(PIN.toString());
    const hashedPIN = await bcrypt.hash(formattedPIN, 10);
    /* console.log(p, p.length); */
    const accountNum = await accountNumberHelper.accountNumCreator();
    console.log(accountNum);

    const user = await new User();

    user.lastname = req.body.lastname;
    user.firstname = req.body.firstname;
    user.email = req.body.email;
    user.password = hashedPassword;
    user.PIN = hashedPIN;
    user.accountNumber = accountNum;

    await user.save();
    return res.status(200).json({ message: "User Created", user });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ message: "Something went wrong creating the user", error });
  }
};
exports.login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  if (user == null) {
    return res
      .status(404)
      .json({ message: "User with that email and/or PIN was not found" });
  }

  try {
    let checkPassword = await bcrypt.compare(req.body.password, user.password);
    let checkPIN = await bcrypt.compare(
      PinEncryptor.format2(req.body.PIN.toString()),
      user.PIN
    );

    if (checkPassword && checkPIN) {
      const token = authenticationHelper.generateToken(user);

      return res
        .status(200)
        .cookie("jwt", token, {
          httpOnly: true,
          secure: false,
          sameSite: "lax",
        })
        .json({ message: "login successful!", token, user });
    } else {
      return res
        .status(400)
        .json({ message: "Passwords and/or PIN not matching" });
    }
  } catch (error) {
    console.log("the error ", error);
    return res.status(400).json({ message: "General error upon signing in." });
  }
};

exports.logout = async (req, res) => {
  try {
    res.clearCookie("jwt").json({ message: "you are logged out now!" });
  } catch {
    res
      .status(400)
      .json({ error: "Logout did not work, please logout again." });
  }
};
