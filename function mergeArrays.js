function mergeArrays(array1, array2) {
  return array1.concat(array2);
}

// Example usage:
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArray = mergeArrays(array1, array2);
console.log(mergedArray); // Outputs: [1, 2, 3, 4, 5, 6]
