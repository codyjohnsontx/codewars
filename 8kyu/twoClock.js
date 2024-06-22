// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:
// h = 0
// m = 1
// s = 1

// result = 61000
// Input constraints:

// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59

// My Solution
function past(h, m, s) {
  // Figure out what the conversions is for each h,m,s
  //
  //  one second = 1000 milliseconds
  //  one minute = 60000 milliseconds
  //  one hour = 3600000 milliseconds
  //
  // create constants for each h,m,s and set it equal to the equation to find amount
  const milliFromSecond = s * 1000;
  const milliFromMinute = m * 60000;
  const milliFromHour = h * 3600000;

  // return sum of all three
  return milliFromSecond + milliFromMinute + milliFromHour;
}
