//////////////////////////////////// DataTypes ////////////////////////////////////
// Number, String and Boolean
function add(n1: number, n2: number, printResult: boolean, title: string) {
  console.log(title);
  console.log("//Number, String and Boolean");
  if (printResult) {
    console.log(
      "The type of n1 is " +
        typeof n1 +
        " and printResult is " +
        typeof printResult
    );
    return n1 + n2;
  } else {
    return "Error";
  }
}

let n1: number;
n1 = 5;
const n2 = 2.8;
const printResult = true;
const title =
  "/////////////////////////////// DataTypes ///////////////////////////////";

const res = add(n1, n2, printResult, title);
console.log(res);

// Object Types
const person: { name: string; nickname: string; age: number } = {
  name: "Pranav",
  nickname: "Tripathi",
  age: 13,
};
console.log("//Object");
console.log(`The age of ${person.name} ${person.nickname} is ` + person.age);

//Arrays Types
const human = {
  parts: ["Hands", "Legs", "Brain"],
};
let emotions: string[];
emotions = ["Happy", "Sad", "Surprised"];

console.log("//Array");
console.log("Emotions of Human are " + emotions);
console.log("Parts of Humans are => ");
for (const part of human.parts) {
  console.log(part.toUpperCase());
}

//Tuple
console.log("//Tuple");
const employee: {
  role: [number, string, string];
} = {
  role: [2, "author", "reader"],
};
// employee.role[0] = "Hai"; // You can not this
console.log("The type of employee is " + typeof employee.role);

//Enum
enum Role {
  Admin = 10,
  Read_Only,
  Author,
}
console.log("//Enum");
const student = {
  role: Role.Admin,
};
if (student.role === Role.Admin) {
  console.log("Student is admin");
} else if (student.role === Role.Author) {
  console.log("Student is author");
} else if (student.role === Role.Read_Only) {
  console.log("Student is read_only");
} else {
  console.log("Error in Student Role");
}

//Any
console.log("//Any");
let favoriteActivities: any;
favoriteActivities = ["Sports"];
console.log(favoriteActivities);
favoriteActivities = 1;
console.log(favoriteActivities);
favoriteActivities = "art";
console.log(favoriteActivities);
favoriteActivities = true;
console.log(favoriteActivities);
