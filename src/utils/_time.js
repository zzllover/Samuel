function timeToShow(str) {
  let arr = str.split('T');
  return arr[0] + arr[1].slice(0, 5);
}

module.exports = { timeToShow };
