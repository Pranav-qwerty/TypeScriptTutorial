"use strict";
// Union Type
/*
console.log("//Union Type");
function combine(input1: number | string, input2: number | string) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    return input1.toString() + input2.toString();
  }
  return result;
}
const combineAges = combine(30, 26);
const combineName = combine("Max", "Pranav");
console.log(combineAges, combineName);
*/
function combine(input1, input2, resultConversion) {
    var result;
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;
    }
    else {
        return input1.toString() + input2.toString();
    }
    if (resultConversion === "as-number") {
        return +result;
    }
    else {
        return result.toString();
    }
}
var combineAges = combine(30, 26, "as-text");
var combineName = combine("Max", "Pranav", "as-number");
console.log(combineAges, combineName);
