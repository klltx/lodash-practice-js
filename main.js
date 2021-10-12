
/* 
Creates an array of elements split into groups the length of size.
If array can't be split evenly, the final chunk will be the remaining elements.
*/
const _chunk = (array, size = 1) => {
  const chunkedArray = [],
    chunkSize = size,
    chunkedArraySize = Math.ceil(array.length / size);
    
  let elemIndex = 0;

  for(let i = 0; i < chunkedArraySize; i++){
    chunkedArray[i] = [];
    for(let j = 0; j < chunkSize; j++){
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
  return array
}



const main = (args) => {
  console.log(_chunk(['a', 'b', 'c', 'd'], 2));
  return args;
}