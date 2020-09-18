module.exports = class DepthCalculator {
  calculateDepth(arr, counter = 0, new_arr = []) {
    counter++;
    new_arr.push(counter);
    arr.forEach((element) => {
      if (Array.isArray(element)) {
        this.calculateDepth(element, counter, new_arr);
      }
    });
    return Math.max(...new_arr);
  }
};
