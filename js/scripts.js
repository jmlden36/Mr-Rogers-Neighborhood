function inputChangeToRangeArray(input) {
  let inputArray = [];
  for (let i = 0; i <= input; i++) {
    inputArray.push(i);
  }
  return(inputArray);
};

function changeRangeArray(array) {
  let numberArray = array.slice().join(", ").split(", ");
  const firstExceptionNumber = [1];
  numberArray.forEach(function(element) {
    if (element.includes(firstExceptionNumber)) {
      console.log(true)
      
    }
  })
  return(numberArray);
};

