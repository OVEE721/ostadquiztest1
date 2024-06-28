function arrayValuesTypes(arr) {
  return arr.map(tmp => typeof tmp);
}

// Example usage:
const myArray = [1, 2, "null", []];
const typesArray = arrayValuesTypes(myArray);
console.log(typesArray); // Outputs: ["number", "number", "string", "object"]
