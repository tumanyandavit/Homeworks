// 1. Given a number. Write a recursive function that reverse the number. Return the new number.
function reverseNumber(number, index = 0) {
  if (index === number.length) {
    return number
  }
  let revNum = number.toString().split('').reverse().join('')
  return parseInt(revNum);
}

// 2. Given a number and an array. Find the second occurrence of the number in the array.
// Consider that the occurrence of each element in the array is at least two.
function findSecondOccurrence(number, array) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === number) {
      count++;
      if (count === 2) {
        return i;
      }
    }
  }
  return -1;
}

// 3. Given a substring and a string. Find how many times the substring occurred in the string.
function countSubstring(substring, str) {
  let count = 0;
  let index = 0;

  while ((index = str.indexOf(substring, index)) !== -1) {
    count++;
    index += substring.length;
  }
  return count;
}

// 4. Given a string, compute recursively (no loops) a new string where all appearances of "pi";
// have been replaced by "3.14"
function replacePi(str) {
  if (str.length === 1) {
    return str;
  } else if (str.slice(0, 2) === "pi" || str.slice(0, 2) === "Pi") {
    return "3.14" + replacePi(str.slice(2));
  } else {
    return str[0] + replacePi(str.slice(1));
  }
}
// 5. Given an array of nested arrays. Write a recursive function that flattens it. (Hint create function that concats arrays).
function concatArray(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      newArray = newArray.concat(concatArray(array[i]))
    } else {
      newArray.push(array[i])
    }
  }
  return newArray;
}