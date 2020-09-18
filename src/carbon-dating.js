const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const RATE_CONSTANT = 0.693 / HALF_LIFE_PERIOD;

module.exports = function dateSample(sampleActivity) {
  let res;
  if (
    sampleActivity <= 0 ||
    typeof sampleActivity !== "string" ||
    sampleActivity > MODERN_ACTIVITY ||
    !sampleActivity.match(/^\d+(\.\d+(\.?\d+)?)?$/g)
  )
    return false;
  res = Math.ceil(
    Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) / RATE_CONSTANT
  );
  return res;
};
