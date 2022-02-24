exports.accountNumCreator = () => {
  const createString =
    "DE07 100700000 " + "" + (Math.random() + 1).toString().slice(2, 12);
  return createString;
};
