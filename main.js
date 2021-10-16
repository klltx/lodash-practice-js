"use strict";

/* 
Creates an array of elements split into groups the length of size.
If array can't be split evenly, the final chunk will be the remaining elements.
*/
const _chunk = (array, size = 1) => {
  const chunkedArray = [],
    chunkedArraySize = Math.ceil(array.length / size);

  let elemIndex = 0;

  for (let i = 0; i < chunkedArraySize; i++) {
    chunkedArray[i] = [];
    for (let j = 0; j < size; j++) {
      chunkedArray[i][j] = array[elemIndex];
      elemIndex++;
      if (elemIndex >= array.length) return chunkedArray;
    }
  }

  return chunkedArray;
};

/* 
Creates an array with all falsey values removed. 
The values false, null, 0, "", undefined, and NaN are falsey.
*/
const _compact = (array) => {
  const compactArray = [];
  array.forEach((value) => {
    if (value) compactArray.push(value);
  });
  return compactArray;
};

/*
Creates a new array concatenating array with any additional arrays and/or values.
*/
const _concat = (array, ...values) => {
  return [...array, ...values];
};

/*
Creates an array of array values not included in the other given arrays using
SameValueZero for equality comparisons.
The order and references of result values are determined by the first array.
*/
const _difference = (array, values) => {
  const resultArray = [];

  array.forEach((v) => {
    if (!values.includes(v)) resultArray.push(v);
  });

  return resultArray;
};

/*
This method returns the first argument it receives.
*/
const _identity = (object) => {
  return object;
};

/*
This method is like _.difference except that it accepts iteratee 
which is invoked for each element of array and values to generate 
the criterion by which they're compared. The order and references 
of result values are determined by the first array. 
The iteratee is invoked with one argument:
(value).
*/
const _differenceBy = (array, values, iteratee = _identity) => {
  return array;
};

const main = (args) => {
  // console.log(_chunk(['a', 'b', 'c', 'd'], 2));

  // console.log(_compact([0, 1, false, 2, '', 3, undefined, NaN]));

  // const array = [1];
  // console.log(_concat(array, 2, [3], [[4]]));

  console.log(_difference([2, 1], [2, 3]));

  return args;
};

main();
