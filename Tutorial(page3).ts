//////////////////////// Functions ////////////////////////
console.log("//////////////////////// Functions ////////////////////////");

// Function Return Types and Void
console.log("// Function Return Types and Void");
function Page3Func1(n1: number, n2: number) {
  return n1 + n2;
}
function Page3Func2(num: number): undefined {
  console.log("Result: " + num);
  return;
}
function Page3Func3(num: number): void {
  console.log("Result: " + num);
}
function Page3Func4(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

Page3Func2(5);
let combineValue: (a: number) => number;

// combineValue = Page3Func1;
// combineValue = Page3Func2;

// console.log(combineValue(2));

Page3Func4(10, 20, (result) => {
  console.log(result);
});
