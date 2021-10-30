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
  const secondExceptionNumber = [2];
  numberArray.forEach(function(element) {
    if (element.includes(firstExceptionNumber)) {
      let index = numberArray.indexOf(element);
      numberArray.splice(index, 1, "Beep!");
    } else if (element.includes(secondExceptionNumber)) {
      let index = numberArray.indexOf(element);
      numberArray.splice(index, 1, "Boop!");
    }
  })
  return(numberArray);
};


