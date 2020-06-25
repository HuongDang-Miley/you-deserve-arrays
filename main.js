/******************
 * YOUR CODE HERE *
 ******************/

function getFirstItemFrom(arr){
  return arr[0]
}

function getLastItemFrom(arr){
  let lastIndex = arr.length - 1
  return arr[lastIndex]
}

function getIndex3(arr) {
  let lastIndex = arr.length - 1
  if (lastIndex < 4) {
    return arr[lastIndex]
  }
  if (lastIndex >= 4) {
    return arr[3]
  }
}

function isLongList(arr){
  if (arr.length >= 10){
    return true
  } else {
    return false;
  }
}

function firstItemIsNumber(arr) {
  const firstItem = arr[0]
  const number = Number(arr[0])
  const str = String(arr[0])
  const array = Array.isArray(arr[0])
  const isFunction = arr[0] instanceof Function;

  isFunction;
  if (firstItem === number) {
   return true
 }

 if (firstItem === str) {
   return false
 }

 if (firstItem === true || firstItem === false) {
   return false
 }

 if (array) {
   return false
 }

 if (isFunction) {
   return false
 }
}

function secondCharOfThirdString(str) {
  return str[2][1]
}

 /********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/



if (typeof getFirstItemFrom === 'undefined') {
  getFirstItemFrom = undefined;
}


if (typeof getLastItemFrom === 'undefined') {
  getLastItemFrom = undefined;
}



if (typeof getIndex3 === 'undefined') {
  getIndex3 = undefined;
}


if (typeof firstItemIsNumber === 'undefined') {
  firstItemIsNumber = undefined;
}


if (typeof isLongList === 'undefined') {
  isLongList = undefined;
}


if (typeof secondCharOfThirdString === 'undefined') {
  secondCharOfThirdString = undefined;
}




module.exports = {
  getLastItemFrom,
  getFirstItemFrom,
  getIndex3,
  firstItemIsNumber,
  isLongList,
  secondCharOfThirdString,
}
