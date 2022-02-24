//*admin function to set the account value: only positive values possible

exports.balanceCalculator = (user, changeAccountBalance) => {
  const balance = (user.accountBalance += changeAccountBalance);

  if (balance < 0) {
    return 0;
  } else {
    return balance;
  }
};
