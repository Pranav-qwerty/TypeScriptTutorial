"use strict";
//////////////////////////////////// DataTypes ////////////////////////////////////
// Number, String and Boolean
function add(n1, n2, printResult, title) {
    console.log(title);
    console.log("//Number, String and Boolean");
    if (printResult) {
        console.log("The type of n1 is " +
            typeof n1 +
            " and printResult is " +
            typeof printResult);
        return n1 + n2;
    }
    else {
        return "Error";
    }
}
var n1;
n1 = 5;
var n2 = 2.8;
var printResult = true;
var title = "/////////////////////////////// DataTypes ///////////////////////////////";
var res = add(n1, n2, printResult, title);
console.log(res);
// Object Types
var person = {
    name: "Pranav",
    nickname: "Tripathi",
    age: 13,
};
console.log("//Object");
console.log("The age of " + person.name + " " + person.nickname + " is " + person.age);
//Arrays Types
var human = {
    parts: ["Hands", "Legs", "Brain"],
};
var emotions;
emotions = ["Happy", "Sad", "Surprised"];
console.log("//Array");
console.log("Emotions of Human are " + emotions);
console.log("Parts of Humans are => ");
for (var _i = 0, _a = human.parts; _i < _a.length; _i++) {
    var part = _a[_i];
    console.log(part.toUpperCase());
}
//Tuple
console.log("//Tuple");
var employee = {
    role: [2, "author", "reader"],
};
// employee.role[0] = "Hai"; // You can not this
console.log("The type of employee is " + typeof employee.role);
//Enum
var Role;
(function (Role) {
    Role[Role["Admin"] = 10] = "Admin";
    Role[Role["Read_Only"] = 11] = "Read_Only";
    Role[Role["Author"] = 12] = "Author";
})(Role || (Role = {}));
console.log("//Enum");
var student = {
    role: Role.Admin,
};
if (student.role === Role.Admin) {
    console.log("Student is admin");
}
else if (student.role === Role.Author) {
    console.log("Student is author");
}
else if (student.role === Role.Read_Only) {
    console.log("Student is read_only");
}
else {
    console.log("Error in Student Role");
}
//Any
console.log("//Any");
var favoriteActivities;
favoriteActivities = ["Sports"];
console.log(favoriteActivities);
favoriteActivities = 1;
console.log(favoriteActivities);
favoriteActivities = "art";
console.log(favoriteActivities);
favoriteActivities = true;
console.log(favoriteActivities);
