// Object langobject is of the type Exp3
// it will now be binding on the object to define all
// properties as specified by the interface.
var langobject = {
    language: "TypeScript",
    level: "Advanced",
    fees: 20000,
    Hello: function () { return "Welcome to TypeScript language"; }
};
// Object langobject2 is of the type Exp3
// it will now be binding on the object to define all
// properties as specified by the interface.
var langobject2 = {
    language: "c++",
    level: "Beginner",
    fees: 2000,
    Hello: function () { return "Welcome to C++ language."; }
};
// Output shown by calling the properties of interface through objects
console.log();
console.log("*****Specifications about the Course:*****");
console.log();
console.log("Course language:", langobject.language);
console.log("Course level:", langobject.level);
console.log("Course fees:", langobject.fees);
console.log(langobject.Hello());
// Output shown by calling the properties of interface through objects
console.log();
console.log("*****Specifications about the Course:*****");
console.log();
console.log("Course language:", langobject2.language);
console.log("Course level:", langobject2.level);
console.log("Course fees:", langobject2.fees);
console.log(langobject2.Hello());
console.log();
