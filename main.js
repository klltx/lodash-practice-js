
/* 
Creates an array of elements split into groups the length of size.
If array can't be split evenly, the final chunk will be the remaining elements.
*/
const _chunk = (array, size = 1) => {
  const chunkedArray = Array(size).fill([]),
    chunkSize = Math.ceil(array.length / size);

  let currentChunk = 0,
    buffSize = 0;

  for(let i = 0; i < array.length; i++){
    if(buffSize < chunkSize){
      chunkedArray[currentChunk].push(array[i]);
      buffSize++;
    } else {
      buffSize = 0;
      currentChunk++;
      chunkedArray[currentChunk].push(array[i]);
    }
  }

  // array.forEach((elem) => {
  //   if(buffSize < chunkSize){
  //     chunkedArray[currentChunk].push(elem);
  //     buffSize++;
  //   } else {
  //     buffSize = 0;
  //     currentChunk++;
  //     chunkedArray[currentChunk].push(elem);
  //   }
  // });
  return chunkedArray;
}

console.log(_chunk(['a', 'b', 'c', 'd'], 2));

/* 
Creates an array with all falsey values removed. 
The values false, null, 0, "", undefined, and NaN are falsey.
*/
const _compact = (array) => {
  return array
}



const main = (args) => {
  console.log(_chunk(['a', 'b', 'c', 'd'], 2));
  return _chunk(['a', 'b', 'c', 'd'], 2)
}