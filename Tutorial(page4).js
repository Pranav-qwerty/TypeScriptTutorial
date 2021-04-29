"use strict";
/////////////////////Some more datatypes/////////////////////
console.log("/////////////////////Some more datatypes/////////////////////");
// Unknown Type
console.log("// Unknown Type");
var userInput;
var userName;
userInput = 5;
userInput = "Max";
if (typeof userInput === "string") {
    userName = userInput;
}
// Never Type
console.log("// Never Type");
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
var result = generateError("An Error occured", 500);
console.log(result);
