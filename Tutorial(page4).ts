/////////////////////Some more datatypes/////////////////////
console.log("/////////////////////Some more datatypes/////////////////////");
// Unknown Type
console.log("// Unknown Type");
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";
if (typeof userInput === "string") {
  userName = userInput;
}
// Never Type
console.log("// Never Type");

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}
const result = generateError("An Error occured", 500);
console.log(result);
