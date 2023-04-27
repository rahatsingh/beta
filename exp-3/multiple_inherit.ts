// Parent Class
class Animal {
    // Method of Parent class
    voice1(): void {
        console.log("I am the Animal(parent) class");
    }
}

// Child class extending the parent class
class Lion extends Animal {

    // Method of Child class
    voice2(): void {
        console.log("I am Lion(child class of Animal");
        console.log("I roar!!");
    }
}

// Child class extending the parent class(Lion)
class BabyLion extends Lion {
    // Method of Child class
    voice3(): void {
        console.log("I am Baby Lion(child class of Lion)");
        console.log("Hello !!!");
    }
}

console.log()
console.log("Demo to show multiplevel inheritence in Typescript");
console.log()

// Creating objects of child class
let myobject1 = new Lion();
myobject1.voice1(); // Calling the methods present in this class
myobject1.voice2();
console.log()

// Creating objects of child class
let myobject2 = new BabyLion();

// Calling the methods present in this class(all methods have been included in this class)
myobject2.voice1();
myobject2.voice2();
myobject2.voice3();
console.log() 