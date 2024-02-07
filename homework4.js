// find
function find(arr, char) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > char) {
            return arr[i]
        }
    }
    return undefined;
}
console.log(find([1, 2, 3, 4, 5, 6], 4));

//  findIndex
function findIndex(arr, char) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === char) {
            return i
        }
    }
    return -1
}
console.log(findIndex([1, 2, 3, 4, 5, 6], 1000));

// map
function map(arr, fun) {
    let arr1 = [];
    for (let i = 0; i < arr.length; i++) {
        arr1.push(fun(arr[i]))
    }
    return arr1;
}
console.log(map([1, 4, 9, 16], elem => elem));

//  filter
function filter(arr, fun) {
    let arr1 = [];
    for (let i = 0; i < arr.length; i++) {
        if (fun(arr[i])) {
            arr1.push(fun(arr[i]))
        }
    }
    return arr1;
}
console.log(filter([1, 4, 9, 16], function (elem) {
    if (elem > 5) {
        return elem
    }
}));

// every
function every(arr, fun) {
    for (let i = 0; i < arr.length; i++) {
        if (!fun(arr[i])) {
            return false;
        }
    }
    return true;
}

console.log(every([2, 4, 6], function (elem) {
    if (elem % 2 === 0) {
        return true;
    } else {
        return false;
    }
}));

//  some
function some(arr, fun) {
    for (let i = 0; i < arr.length; i++) {
        if (fun(arr[i])) {
            return true;
        }
    }
    return false;
}
console.log(some([1, 3, 5, 4], elem => elem % 2 === 0));

// forEach
function forEach(arr, fun) {
    let arr1 = [];
    for (let i = 0; i < arr.length; i++) {
        arr1.push(fun(arr[i]))
    }
    return arr1;
}
console.log(forEach([1, 4, 9, 16], elem => elem * 2));