// 1.   Given an array. Determine whether it consists only from uniques or not.
function uniquesTest(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return false;
      }
    }
    return true;
  }
}
console.log(uniquesTest([1, 2, 3, 4, 5, 6, 1]));

// 2.   Given an array of numbers. Find the sum of prime numbers.
function primeNumber(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      sum += arr[i]
    }
  }
  return sum;
}
console.log(primeNumber([1, 2, 3, 4, 5, 6]));

// 3.   Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.
function adjancedProduct(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    let product = arr[i] * arr[i + 1]
    if (product > max) {
      max = product;
    }
  }
  return max;
}
console.log(adjancedProduct([1, 2, 3, 5, 4]));

// 4.   Given a sorted array and an element from that array. Find the index of that element using binary search. (You should research binary
//  search)
function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let midle = Math.floor((start + end) / 2);
    if (target === arr[midle]) {
      return midle;
    }
    if (target < arr[midle]) {
      end = midle - 1;
    } else {
      start = midle + 1;
    }
  }
  return -1;
}
console.log(binarySearch([1, 2, 3, 4, 5, 6], 6));
