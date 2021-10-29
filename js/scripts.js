function inputChangeToRangeArray(input) {
  let inputArray = [];
  for (let i = 0; i <= input; i++) {
    inputArray.push(i);
  }
  return(inputArray)
};

function changeRangeArray(array) {
  let changedInputArray = [];
  const firstExceptionNumber = [1];
  array.forEach(function(element) {
    if (firstExceptionNumber.includes(element)) {
      changedInputArray = array.join(", ").replace(/[1]/g, "Beep!");
    }
  })
  return(changedInputArray);
};


function changeRangeArray(array) {
  let changedInputArray = [];
  const firstExceptionNumber = [1];
  array.forEach(function(element) {
    if (firstExceptionNumber.includes(element)) {
      changedInputArray = array.splice(element, element, "Beep!");
    }
  })
  return(changedInputArray);
};