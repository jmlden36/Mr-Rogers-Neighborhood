function inputChangeToRangeArray(input) {
  let inputArray = [];
  for (let i = 0; i <= input; i++) {
    inputArray.push(i);
  }
  return(changeRangeArray(inputArray));
};

function changeRangeArray(array) {
  let numberArray = array.slice().join(", ").split(", ");
  const firstExceptionNumber = [1];
  const secondExceptionNumber = [2];
  const thirdExceptionNumber = [3]
  numberArray.forEach(function(element) {
    if (element.includes(thirdExceptionNumber)) {
      let index = numberArray.indexOf(element);
      numberArray.splice(index, 1, "Won't you be my neighbor?");
    } else if (element.includes(secondExceptionNumber)) {
      let index = numberArray.indexOf(element);
      numberArray.splice(index, 1, "Boop!");
    } else if (element.includes(firstExceptionNumber)) {
        let index = numberArray.indexOf(element);
        numberArray.splice(index, 1, "Beep!");
    }    
  })
  return(numberArray.join(", "));
};



