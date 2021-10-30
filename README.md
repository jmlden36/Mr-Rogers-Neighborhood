Describe: inputChangeToRangeArray()

Test: "It should return an array with a 1 if the number 1 is inputted"
Code: inputChangeToRangeArray(1);
Expected Output: [1]

Test: "It should return an array of numbers starting with 0 and up to the input number"
Code: inputChangeToRangeArray(4);
Expected Output: [0, 1, 2, 3, 4]

Describe: changeRangeArray()

Test: "It should take the inputted array and declare a new array with the inputted array's values"
Code: changeRangeArray([1]);
Expected Output: [1]

Test: "It should take the new array and turn it in to a string"
Code: changeRangeArray([0, 1, 2]);
Expected Output: "0, 1, 2"

Test: "It should turn that string into an array of individual string values"
Code: changeRangeArray([0, 1, 2])
Expected Output: ["0", "1", "2"]

Test: "It should check if the number 1 is included in any of the elements of the new string array"
Code: changeRangeArray([0, 1, 2, 3, 4]);
Expected Output: true