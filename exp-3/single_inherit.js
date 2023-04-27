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
// Base Class
var Flower = /** @class */ (function () {
    function Flower() {
    }
    Flower.prototype.color1 = function () {
        console.log();
        console.log("I am method of parent class");
        console.log();
    };
    return Flower;
}());
// Child class extending the base class
var Rose = /** @class */ (function (_super) {
    __extends(Rose, _super);
    function Rose() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rose.prototype.color2 = function () {
        console.log("I am method of child class&");
        console.log("Color of rose is red !!!");
        console.log();
    };
    return Rose;
}(Flower));
console.log();
console.log("Single inheritence in Typescript");
// Creating object of the child class which has all methods accessible to it
var myobject = new Rose();
// Calling the methods through the object
myobject.color1();
myobject.color2();
