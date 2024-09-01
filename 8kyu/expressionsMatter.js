// always number, never negative, always whole number
// return
//

function expressionMatter(a, b, c) {
  let resultOne = a + b + c;
  let resultTwo = a * b * c;
  let resultThree = a + b * c;
  let resultFour = (a + b) * c;
  let resultFive = a * (b + c);
  let resultSix = a * b + c;

  return Math.max(
    resultOne,
    resultTwo,
    resultThree,
    resultFour,
    resultFive,
    resultSix
  );
}
