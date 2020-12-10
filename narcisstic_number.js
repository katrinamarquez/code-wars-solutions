// Write a function to determine if a number is a narcisstic value
// 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153 (true)
// 1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938 (false)

function narcisstic(value) {
  // change number into string
  let newNum = value.toString();

  // turn number into an array
  let array = newNum.split("");

  // loop through each index of the array and multiply by length. Store in a new array
  let i;
  let newArray = [];
  for (i of array) {
    let n = Math.pow(i, array.length);
    newArray.push(n);
  }

  // sum of new array 
  var total = newArray.reduce(function (a, b) {
    return a + b; 
  }, 0); 

  // check that new array equals number
  if (total === value) {
    return true;
  } else {
    return false;
  };
};






