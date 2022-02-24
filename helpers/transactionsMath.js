const { json } = require("express/lib/response");

//* transaction function that does not accept to transfer more money than available in the account of the sender

exports.transactionSenderBalance = (user, transmittedValue) => {
  let result;

  user.accountBalance < transmittedValue || transmittedValue <= 0
    ? (result = user.accountBalance)
    : (result = user.accountBalance -= transmittedValue);
  return result;
};

exports.transactionRecipientBalance = (user, transmittedValue) => {
  const balance = (user.accountBalance += transmittedValue);
  return balance;
};
