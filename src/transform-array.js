module.exports = function transform(array) {
  if (!Array.isArray(array)) throw new Error("if arr is not an Array");
  let arr = [...array];

  const isSelection = (item) => {
    if (
      item === "--discard-next" ||
      "--discard-prev" ||
      "--double-next" ||
      "--double-prev"
    ) {
      return true;
    }
    return false;
  };

  arr.forEach((elem, id) => {
    if (isSelection(elem)) {
      switch (elem) {
        case "--discard-next": {
          if (id + 1 < arr.length) {
            arr[id + 1] = " ";
            arr[id] = " ";
          } else {
            arr[id] = " ";
          }
          break;
        }
        case "--discard-prev": {
          if (id - 1 > 0) {
            arr[id - 1] = " ";
            arr[id] = " ";
          } else {
            arr[id] = " ";
          }
          break;
        }
        case "--double-next": {
          if (id + 1 < arr.length) {
            arr[id] = arr[id + 1];
          } else {
            arr[id] = " ";
          }
          break;
        }
        case "--double-prev": {
          if (id - 1 > 0) {
            arr[id] = arr[id - 1];
          } else {
            arr[id] = " ";
          }
          break;
        }
      }
    }
  });

  return arr.filter((elem) => elem !== " ");
};
