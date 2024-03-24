// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

// My solution

function removeUrlAnchor(url) {
  let position = url.indexOf("#");
  if (position === -1) {
    return url;
  } else {
    return url.substring(0, position);
  }
}

// Shorter solution

function removeUrlAnchor(url) {
  return url.split("#")[0];
}
