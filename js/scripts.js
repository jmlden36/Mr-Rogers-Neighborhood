function inputChangeToRangeArray(input) {
  let inputArray = [];
  for (let i = 0; i <= input; i++) {
    inputArray.push(i);
  }
  return(inputArray)
};

function changeRangeArray(array) {
  let changedInputArray = [];
  array.forEach(function(element) {
    if (element === 1) {
      changedInputArray = array.join(", ").replace(/[1]/g, "Beep!");
    }
  })
  return(changedInputArray);
};