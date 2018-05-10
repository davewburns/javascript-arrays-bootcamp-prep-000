var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, elememt) {
  //array = [...array, elememt];
  array[0] = element
  return array;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element) 
  return array;
}

function addElementToEndOfArray(array, element) {
  
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.shift(element)
  return array;
}


