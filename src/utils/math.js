const math = (numbers) => numbers.reduce((acc, n) => acc + n) / numbers.length;

const random = (min, max) => {
  const _min = Math.ceil(min);
  const _max = Math.floor(max);
  return Math.floor(Math.random() * (_max - _min + 1) + _min);
};

module.exports = {
  math,
  random,
};
