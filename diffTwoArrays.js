/*
* Compare two arrays and return a new array with any items only found in one of the two given arrays, 
* but not both. In other words, return the symmetric difference of the two arrays.
*/
function diffArray(arr1, arr2) {
  var newArr = [];
  var pos = [];
  newArr= arr1.concat(arr2);
  function eliminate(arr) {
    for(var i = 0; i<arr.length-1; i++) {
      for(var j = i+1; j<arr.length; j++) {
        if(arr[i] == arr[j]) {
          pos.push(arr[i]);
        }
      }
    }
    for (i = 0; i<pos.length; i++) {
      for(j = arr.length-1; j>=0; j--) {
        if(pos[i] == arr[j]) {
         arr.splice(j, 1);
        }
      }
    }
  }
  
  eliminate(newArr);
  
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
