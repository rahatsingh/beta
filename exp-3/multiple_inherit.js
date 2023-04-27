var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Parent Class
var Animal = /** @class */ (function () {
    function Animal() {
    }
    // Method of Parent class
    Animal.prototype.voice1 = function () {
        console.log("I am the Animal(parent) class");
    };
    return Animal;
}());
// Child class extending the parent class
var Lion = /** @class */ (function (_super) {
    __extends(Lion, _super);
    function Lion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Method of Child class
    Lion.prototype.voice2 = function () {
        console.log("I am Lion(child class of Animal");
        console.log("I roar!!");
    };
    return Lion;
}(Animal));
// Child class extending the parent class(Lion)
var BabyLion = /** @class */ (function (_super) {
    __extends(BabyLion, _super);
    function BabyLion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Method of Child class
    BabyLion.prototype.voice3 = function () {
        console.log("I am Baby Lion(child class of Lion)");
        console.log("Hello !!!");
    };
    return BabyLion;
}(Lion));
console.log();
console.log("Demo to show multiplevel inheritence in Typescript");
console.log();
// Creating objects of child class
var myobject1 = new Lion();
myobject1.voice1(); // Calling the methods present in this class
myobject1.voice2();
console.log();
// Creating objects of child class
var myobject2 = new BabyLion();
// Calling the methods present in this class(all methods have been included in this class)
myobject2.voice1();
myobject2.voice2();
myobject2.voice3();
console.log();
