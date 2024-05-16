// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns
// one of the following strings:

// name + " plays banjo"
// name + " does not play banjo"
// Names given are always valid strings.

// Pseudo code
// -Take name and break it apart into an Array
// -We can use .split() to do that
// -Question states if first letter is Capital or lower case
// -For the sake of the problem lets assume it could be either
// to simplify code a little bit when we are using the .split method, lets also
// use the .toLowerCase method to set whatever name to all lowercase for the function
// -Use if statement to determine if position 0 in the array (aka first letter equals r or R)
// -if array[0] strict equality (===) to 'r' return name + " plays banjo"
// -if above is false, return name + " does not play banjo"

function areYouPlayingBanjo(name) {
  let array = name.toLowerCase().split("");
  if (array[0] === "r") {
    return name + " plays banjo";
  }
  return name + " does not play banjo";
}
