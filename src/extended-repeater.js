module.exports = repeater = (str, options) => {
  let {
      repeatTimes = 1,
      separator = "+",
      addition,
      additionRepeatTimes,
      additionSeparator = "|",
    } = options,
    res = [];

  if (additionRepeatTimes !== undefined)
    additionRepeatTimes = additionRepeatTimes;
  else additionRepeatTimes = 1;

  for (let i = 0; i < repeatTimes; i++) {
    res.push(`${str}`);

    for (let i = 0; i < additionRepeatTimes; i++) {
      if (addition !== undefined) res.push(`${addition}`);
      if (additionRepeatTimes > i + 1) {
        res.push(additionSeparator);
      }
    }
    if (repeatTimes > i + 1) res.push(separator);
  }
  return res.join("");
};
