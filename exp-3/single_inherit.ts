// Base Class
class Flower {
    color1(): void {
        console.log();
        console.log("I am method of parent class");
        console.log();
    }
}
// Child class extending the base class
class Rose extends Flower {
    color2(): void {
        console.log("I am method of child class&");
        console.log("Color of rose is red !!!");
        console.log();
    }
}

console.log();
console.log("Single inheritence in Typescript");
// Creating object of the child class which has all methods accessible to it
let myobject = new Rose();
// Calling the methods through the object
myobject.color1();
myobject.color2(); 