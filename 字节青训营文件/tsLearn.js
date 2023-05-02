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
var Animal = /** @class */ (function () {
    function Animal(name, age) {
        this.name = name;
        this.age = age;
    }
    Animal.prototype.move = function (distance) {
        if (distance === void 0) { distance = 0; }
        console.log("".concat(this.name, " \u8D70\u4E86").concat(distance, " \u7C73."));
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.bark = function () {
        console.log('旺旺汪');
    };
    return Dog;
}(Animal));
var dog = new Dog('RealFun的小狗', 2);
dog.bark();
dog.move(10);
console.log(dog);
console.log(Animal);
console.log(typeof (Animal));
