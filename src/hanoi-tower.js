module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turns = Math.pow(2, disksNumber) - 1;
  turnsSpeed = turnsSpeed / 3600;
  let seconds = turns / turnsSpeed;

  let res = {
    turns: turns,
    seconds: Math.floor(seconds),
  };
  return res;
};
