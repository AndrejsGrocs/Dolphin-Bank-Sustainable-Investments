const User = require("./../models/User");
const Transaction = require("./../models/Transaction");
const transactionsMath = require("./../helpers/transactionsMath");

exports.transaction = async (req, res) => {
  const { body } = req;

  try {
    const recipient = await User.findOne({ accountNumber: body.accountNumber });

    if (recipient == null) {
      return res.status(400).json({
        message:
          "User with this account number does not exist, please try again.",
      });
    }

    const sender = await User.findByIdAndUpdate(
      req.user._id,
      {
        accountBalance: transactionsMath.transactionSenderBalance(
          req.user,
          Number(body.transmittedValue)
        ),
      },
      { new: true }
    ).populate("firstname lastname");

    console.log(sender.accountBalance);
    console.log(body.transmittedValue);

    if (
      body.transmittedValue < sender.accountBalance &&
      body.transmittedValue > 0
    ) {
      await recipient.updateOne(
        {
          accountBalance: transactionsMath.transactionRecipientBalance(
            recipient,
            Number(body.transmittedValue)
          ),
        },
        { new: true }
      );
    } else {
      return res.status(400).json({
        message:
          "This transaction is not possible due to your account limit or a negative or input of zero.",
      });
    }

    const transaction = await Transaction.create({
      transmittedValue: body.transmittedValue,
      recipient: recipient._id,
      sender: req.user._id,
    });
    // console.log(req.user._id);
    res.status(200).json({
      message: "Transaction completed!",
      transaction,
      sender,
      recipient,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Transaction not possible" });
  }
};

exports.transactionHistory = async (req, res) => {
  try {
    const historyAsRecipient = await Transaction.find({
      recipient: req.user._id,
    }).populate({ path: "sender", select: "firstname lastname accountNumber" });
    const historyAsSender = await Transaction.find({
      sender: req.user._id,
    }).populate({
      path: "recipient",
      select: "firstname lastname accountNumber",
    });
    const transactions = historyAsRecipient.concat(historyAsSender);

    const sortedTransactions = transactions.sort((a, b) => {
      if (a.createdOn < b.createdOn) {
        return 1;
      }

      return -1;
    });

    res.status(200).json(sortedTransactions);
  } catch (err) {
    res.status(400).json({
      Error: "Transaction history not accessible, please contact us.",
      err,
    });
  }
};
