const User = require("./../models/User");
const balanceMath = require("./../helpers/balanceMath");

exports.accountBalance = async (req, res) => {
  const { body } = req;

  try {
    //verify first
    const balanceToUpdate = await User.findByIdAndUpdate(
      req.user._id,
      {
        // email: body.email,
        accountBalance: balanceMath.balanceCalculator(
          req.user,
          body.changeAccountBalance
        ),
      },
      { new: true }
    );

    console.log();

    if (!balanceToUpdate)
      return res.status(404).json({ message: "Customer not found" });

    return res.status(200).json({
      message: "Your new account balance is:",
      balanceToUpdate,
    });
  } catch (error) {
    return res.status(400).json({ message: "Error happened" });
  }
};

exports.updateUser = async (req, res) => {
  const { body } = req;

  try {
    //verify first
    const userToUpdate = await User.findByIdAndUpdate(
      req.user._id,
      {
        email: body.email,
      },
      { new: true }
    );

    if (!userToUpdate)
      return res.status(404).json({ message: "Customer not found" });

    return res.status(200).json({
      message: "Your updated account is:",
      userToUpdate,
    });
  } catch (error) {
    return res.status(400).json({ message: "Update Error happened" });
  }
};

exports.deleteUser = async (req, res) => {
  const { body } = req;

  try {
    //verify first
    const userToUpdate = await User.findByIdAndDelete(req.user._id);

    if (!userToUpdate)
      return res.status(404).json({ message: "Customer not found" });

    return res.status(200).json({
      message: "Your account is deleted",
    });
  } catch (error) {
    return res.status(400).json({ message: "Delete Error happened" });
  }
};
