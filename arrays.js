var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  var beginArray = [...array, element];
  // array[0] = element
  return beginArray;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element) 
  return array;
}

function addElementToEndOfArray(array, element) {
  var endArray = [element, ...array];
  return endArray;
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.shift(element)
  return array;
}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array;
}

function removeElementFromBeginningOfArray(array) {
  sliceArray = array.slice(1)
  return sliceArray;
}