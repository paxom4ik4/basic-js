module.exports = function transform(array) {
  if (!Array.isArray(array)) throw new Error("if arr is not an Array");
  let arr = [...array];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "--discard-prev") {
      if (typeof arr[i - 2] === "string") {
        arr[i - 2] = " ";
        arr[i] = " ";
      } else if (typeof arr[i - 2] === "string") {
        arr[i] = " ";
        arr[i - 1] = " ";
        arr[i - 2] = " ";
      } else if (arr[i - 1] > 0) {
        arr[i - 1] = " ";
        arr[i] = " ";
      } else {
        arr[i] = " ";
      }
    }
    if (arr[i] === "--discard-next") {
      if (typeof arr[i + 2] === "string") {
        arr[i] = " ";
        arr[i + 1] = " ";
        arr[i + 2] = " ";
      } else if (arr[i + 1] < arr.length) {
        arr[i + 1] = " ";
        arr[i] = " ";
      } else {
        arr[i] = " ";
      }
    }
  }
  arr = arr.filter((elem) => elem !== " ");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "--double-next") {
      if (typeof arr[i + 2] === "string") {
        if (arr[i + 2] === "--double-prev") {
          arr[i] = arr[i + 1];
          arr[i + 2] = arr[i + 1];
        }
      }
    }

    if (arr[i] === "--double-next") {
      if (arr[i + 1] < arr.length) {
        arr[i] = arr[i + 1];
      } else {
        arr[i] = " ";
      }
    }
    if (arr[i] === "--double-prev") {
      if (arr[i - 1] > 0) {
        arr[i] = arr[i - 1];
      } else {
        arr[i] = " ";
      }
    }
  }

  arr = arr.filter((elem) => elem !== " ");
  arr = arr.filter(
    (elem) =>
      elem !== "--discard-prev" ||
      "--discard-next" ||
      "--double-prev" ||
      "--double-next"
  );
  return arr;
};
