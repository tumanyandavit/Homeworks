// String.prototype.concat()
function concat(str1, str2) {
    let string = str1 + " " + str2;
    return string;
}

console.log(concat("Hello", "Armenia"));

// String.prototype.repeat()
function repeatFunc(str, num) {
    let i = 0
    let newStr = "";
    while(i < num) {
      i++;
      newStr += str + " ";
    }
    return newStr;
}
console.log(repeatFunc("Hello!", 4));

// String.prototype.substring()
function subString(str, start ,end) {
  let result = "";
  for(let i = start; i < end; i++) {
      result += str[i];
  }
  return result;
}
console.log(subString("Armenia", 1, 3));

// String.prototype.endsWith()
function  endsWith(str, end) {
  for (let i = 0; i < str.length; i++) {
    let isIncludes = true
    for (let k = 0; k < end.length; k++) {
      if (str[str.length - 1] !== end[end.length - 1]) {
        isIncludes = false;
        break;
      }
    }
    if (isIncludes) {
      return true
    }
  }
  return false
}
console.log(endsWith("Cats are the best!", "bes!"));

// String.prototype.startsWith()
function  startsWith(str, start) {
  for (let i = 0; i < str.length; i++) {
    let isIncludes = true
    for (let k = 0; k < start.length; k++) {
      if (str[0] !== start[0]) {
        isIncludes = false;
        break;
      }
    }
    if (isIncludes) {
      return true
    }
  }
  return false
}
console.log(startsWith("Cats are the best!", "Cats"));

// String.prototype.replace()
function  replace(str, search, replaceValue) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let isIncludes = true
    for (let k = 0; k < search.length; k++) {
      if (str[i+k] !== search[k]) {
        isIncludes = false;
        break;
      }
    }
    if (isIncludes) {
      result += replaceValue
      i += search.length -1
    } else {
      result += str[i]
    }
  }
  return result
}
console.log(replace("I think Ruth's dog is cuter than your dog!", "Ruth's", "my"));