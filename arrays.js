var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, elememt) {
  array = [...array, elememt];
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element) 
  return array;
}
  