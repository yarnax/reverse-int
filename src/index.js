module.exports = function reverse (n) {
  let answerNumber = parseInt(n.toString().split("").reverse().join(""));
  return answerNumber;
}
