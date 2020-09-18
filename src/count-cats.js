module.exports = countCats = (arr) => {
  let sum = 0;
  arr.forEach((array) => {
    array.forEach((item) => {
      item === "^^" ? sum++ : sum;
    });
  });
  return sum;
};
