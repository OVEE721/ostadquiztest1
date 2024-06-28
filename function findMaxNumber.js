function findMaxNumber(numbers) {
  if (numbers.length === 0) {
    return null;
  }
  return Math.max(...numbers);
}

// Example usage:
const myArray = [267, 306, 108];
const maxNumber = findMaxNumber(myArray);
console.log(`Maximum number: ${maxNumber}`); // Outputs: Maximum number: 306
