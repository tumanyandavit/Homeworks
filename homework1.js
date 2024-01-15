// 1. Given an object. Invert it (keys become values and values become keys). If there is
//more than key for that given value create an array.

function inverse(obj){ 
    let retobj = {}; 
    for(let key in obj){ 
      retobj[obj[key]] = key; 
    } 
    return retobj; 
  } 
  console.log(inverse({a: "1", b: "2", c: "2"}));
  
  
  //  2. Given two objects. Write a function that performs shallow compare.
  
  function compareObj(obj1, obj2) {
      const keys1 = Object.keys(obj1);
      const keys2 = Object.keys(obj2);
  
      for(const key of keys1) {
        if((obj1[key] !== obj2[key]) && (keys1.length !== keys2.length) ) {
          return false;
        }
      }
      return true;
  }
  
  const objOne = {a: 1, b: 2};
  const objTwo = {a: 1, b: 2};
  
  console.log(compareObj(objOne, objTwo));
  
  // 3. Check whether string is palindrome, or not.
  function palindromeTest(str) {
    let start = 0;
    let end = str.length-1;
    while(start < end) {
      if(str[start] !== str[end]) {
        return false;
      }
      start++;
      end--;
    }
    return true;
   
  }
  console.log(palindromeTest("abggba"));
  
  // 4. Given an array of integers. All numbers are unique. Find the count of missing numbers
  // between minimum and maximum elements to make integers sequence.
  function cheqCount(array) {
    let max = array.length - 1;
    let count = 0;
  
  for(let i = 0; i < max; i++) {
    let allNumber = array[i] % 2 !== 0
    if(allNumber) {
      count++;
    } 
  }
  return count;
  }
  console.log(cheqCount([1, 3, 5, 7, 9]));
  
  // 5. Given an array and element. Check if that element exists in array.
  function arrayTestElem(arr, elem) {
    let i = 0;
    while(i < arr.length) {
      if(arr[i] === elem) {
        return true;
      }
      i++
    }
    return false;
  }
  
  console.log(arrayTestElem([1,"j",2,5,"abc"], 5));