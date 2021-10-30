function inputChangeToRangeArray(input) {
  let inputArray = [];
  for (let i = 0; i <= input; i++) {
    inputArray.push(i);
  }
  return(inputArray);
};

function changeRangeArray(array) {
  let numberArray = array.slice().join(", ");
  return numberArray;
}
