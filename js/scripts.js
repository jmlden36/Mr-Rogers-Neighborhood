function inputChangeToRangeArray(input) {
  let inputArray = [];
  for (let i = 0; i <= input; i++) {
    inputArray.push(i);
  }
  return(changeRangeArray(inputArray))
};

function changeRangeArray(array) {
  let changedInputArray = [];
  const firstExceptionNumber = [1];
  array.forEach(function(element) {
    if (firstExceptionNumber.includes(element)) {
      let newArray = array.splice(element, element, 1);
      array++;
      console.log(array);
      console.log(newArray);
      changedInputArray = newArray.join(", ").replace(/[1]/g, "Beep!");
    }
  })
  return(changedInputArray);
};












function changeRangeArray(array) {
  let changedInputArray = [];
  const firstExceptionNumber = [1];
  array.forEach(function(element) {
    if (firstExceptionNumber.includes(element)) {
      changedInputArray = array.join(", ").replace(element, element, "Beep!");
    }
  })
  return(changedInputArray);
};

function changeRangeArray(array) {
  let changedInputArray = [];
  const firstExceptionNumber = [1];
  array.forEach(function(element) {
    if (firstExceptionNumber.includes(element)) {
      arrayElement = element
      console.log(arrayElement)
      changedInputArray = array.splice(arrayElement, arrayElement, "Beep!");
    }
  })
  return(changedInputArray);
};


function changeRangeArray(array) {
  let changedInputArray = [];
  const firstExceptionNumber = [1];
  array.forEach(function(element) {
    if (firstExceptionNumber.includes(element)) {
      
      console.log(array)
      changedInputArray = array.join(", ").split(", ")
      
    }
  })
  return(changedInputArray);
};


function changeRangeArray(array) {
  let changedInputArray = [];
  const firstExceptionNumber = [1];
  array.forEach(function(element) {
    if (firstExceptionNumber.includes(element)) {
      array.forEach(function(element))
      console.log(array)
      changedInputArray = array.join(", ").replace(/[1]/g, "Beep!");
    }
  })
  return(changedInputArray);
};