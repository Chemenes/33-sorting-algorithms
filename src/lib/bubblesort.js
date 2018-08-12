'use strict'

function bubbleSort(arr) {
  var len = arr.length;
   // For loop wiil iterate through each element in array and compare the first and second to see which one is bigger and they will swap in numerical order
  for (var i = len - 1; i >= 0; i--) {
    for (var j = 1; j <= i; j++) {
       // if arr at j is less than j swap
      if (arr[j - 1] > arr[j]) {
        var temp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}
bubbleSort([6, 7, 3, 5, 4, 8,]); //[3, 4, 5, 6, 7, 8]
// .
