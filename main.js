"use strict";
/* 
Creates an array of elements split into groups the length of size.
If array can't be split evenly, the final chunk will be the remaining elements.
*/
const _chunk = (array, size = 1) => {
  const chunkedArray = [],
    chunkedArraySize = Math.ceil(array.length / size);
    
  let elemIndex = 0;

  for(let i = 0; i < chunkedArraySize; i++){
    chunkedArray[i] = [];
    for(let j = 0; j < size; j++){
      chunkedArray[i][j] = array[elemIndex];
      elemIndex++;
      if(elemIndex >= array.length) return chunkedArray;
    }
  }

  return chunkedArray;
}

/* 
Creates an array with all falsey values removed. 
The values false, null, 0, "", undefined, and NaN are falsey.
*/
const _compact = (array) => {
  const compactArray = []
  array.forEach((value) => { if(value) compactArray.push(value) })
  return compactArray
}



const main = (args) => {
  // console.log(_chunk(['a', 'b', 'c', 'd'], 2));
  console.log(_compact([0, 1, false, 2, '', 3, undefined, NaN]));
  return args;
}

main()