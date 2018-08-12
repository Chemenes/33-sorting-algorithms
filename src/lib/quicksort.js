'use strict'


//Quick sort takes in origArray, returns origArray length is less that or equal to 1
function quick_Sort(origArray) {
  if (origArray.length <= 1) {
    return origArray;
  } else {
// else statement creates empty arrays to push into so that we can return our new array
    var left = [];
    var right = [];
    var newArray = [];
    var pivot = origArray.pop();
    var length = origArray.length;
// for loop will iterate through origArray, if origArray is less than or equal to pivot(pop) it will push into left array if not right
    for (var i = 0; i < length; i++) {
      if (origArray[i] <= pivot) {
        left.push(origArray[i]);
      } else {
        right.push(origArray[i]);
      }
    }
// this will return our new array and concat(combine) or arrays
    return newArray.concat(quick_Sort(left), pivot, quick_Sort(right));
  }
}

var myArray = [5, 2, 1, 7, 4, 9, 6];
//These console logs will show the results of our former arrat and new array
console.log("Original array: " + myArray);
var sortedArray = quick_Sort(myArray);
console.log("Sorted array: " + sortedArray);