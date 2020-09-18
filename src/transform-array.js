module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error("if arr is not an Array");

  let count = 1;
  let res = arr;

  res.filter((item) =>
    item === "--discard-next" || item === "--discard-prev" ? count++ : ""
  );

  for (let i = 0, len = res.length; i < len; i++) {
    if (res[i] === "--double-next")
      i + 1 < len ? (res[i] = res[i + 1]) : (res[i] = " ");
    if (res[i] === "--double-prev") i ? (res[i] = res[i - 1]) : (res[i] = " ");
  }

  while (count--) {
    for (let i = 0, len = res.length; i < len; i++) {
      if (res[i] === "--discard-next" || res[i] === "--discard-prev") {
        if (res[i] === "--discard-next" && i + 1 < len) res[i + 1] = " ";
        if (res[i] === "--discard-prev" && i) res[i - 1] = " ";
        res[i] = " ";
        break;
      }
    }
    res = res.filter((item) => item !== " ");
  }

  return res;
};
