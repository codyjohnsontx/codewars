// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're
// better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate
// the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points.
// For calculating the average point you may add your point to the
// given array!

// My solution

const betterThanAverage = (classPoints, yourPoints) => {
  const sum = classPoints.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  const classAvg = sum / classPoints.length;
  if (yourPoints > classAvg) {
    return true;
  } else if (yourPoints < classAvg) {
    return false;
  }
};
