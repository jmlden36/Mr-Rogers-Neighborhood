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
    if (element === 1 || firstExceptionNumber.includes(element)) {

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

function changeRangeArray(array) {
  let changedInputArray = [];
  const firstExceptionNumber = [1];
  array.forEach(function(element, i) {
    if (firstExceptionNumber.includes(element)) {
      let index = array.indexOf(element);
      array.splice(index, 1, "Beep!")
      console.log(array)
      changedInputArray = array.join(", ").replace(/[1]/g, "Beep!");
    }
  })
  return(changedInputArray);
}; 