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
  if (arr.length < 4) {
    return arr[arr.length-1]
  }
  if (arr.length >= 4) {
    return arr[3]
  }
}

function isLongList(arr) { 
  const length = arr.length 
  const lengthEqual10 =  length === 10
  // const lengthEqual10 =  length === 10
  if (lengthEqual10) {
    console.log(lengthEqual10)
  // } else { return 'false'}
}
// isLongList([10, 9, 8, 7, 6, 4, 3, 2, 1, 0]);


function firstItemIsNumber(arr) {
 let Number = Number(arr[0])

 if (arr[0] === Number) {
   return 'true'
 }
}

function secondCharOfThirdString(str) {
  return str[2][1]
}

// let str = ['hello', 'there', 'good', 'sir']
// let thirdString = str[2]
// thirdString;
// let secondCHar = thirdString[1]
// secondCHar;
// let short = str[2][1]
// short;
// console.log(str[2][1]);

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
