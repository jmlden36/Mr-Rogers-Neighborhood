Describe: inputChangeToRangeArray()

Test: "It should return an array with a 1 if the number 1 is inputted"
Code: inputChangeToRangeArray(1);
Expected Output: [1]

Test: "It should return an array of numbers starting with 0 and up to the input number"
Code: inputChangeToRangeArray(4);
Expected Output: [0, 1, 2, 3, 4]

Test: "It should return "Please input a number" if the input is anything but a number"
Code: inputChangeToRangeArray("hi");
Expected Output: "Please input a number"