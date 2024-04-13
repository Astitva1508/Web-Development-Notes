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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var userQ = { name: 'Astitva', email: 'astitadubey1508@gmail.com' };
//Basic Types (Primitive):
var num = 2;
var company = 'Astitva';
var isPublished = true;
var anything = 5;
anything = 'Hello , I am a string now';
var numberArray = [1, 2, 3, 4, 5];
//Tuple specifies the exact types inside the array
var person = [20, 'Astitva', true];
//Tuple Array
var personArray = [[20, 'Astitva', true], [22, 'Bagghad', true]];
//Union enables sinlge variable to hold more than one types
var productId;
//Enums allow us to declare a set of named constants, either numeric or string
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Right"] = 2] = "Right";
    Direction1[Direction1["Left"] = 3] = "Left";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Right"] = "Right";
    Direction2["Left"] = "Left";
})(Direction2 || (Direction2 = {}));
//Objects
var user = {
    id: 1,
    name: 'Astitva'
};
var user1 = {
    id: 2,
    name: 'Dhruv'
};
//Type Assertion -> explicitly telling the compiler that we want to treat an entity as a different type
var cid = 1;
// let anotherCID = <number>cid
// let anotherCID = cid as number
//Note that 
var iAmAVar = 2; //is OK
//But to not define the function parameters type is not OK unless you change the config and change the noImplicitAny to false
//Functions
function addNum(num1, num2) {
    var sum = num1 + num2;
    return (sum);
}
var anotherUser = {
    id: 2,
    name: 'Astitva'
};
//Alternatively we can declare objects as(though it doesnt serve the best purpose of typescript)
var thisIsAnObject = {
    id: 2,
    name: 'Astitva'
};
var add = function (x, y) { return x + y; };
//OR
var add1 = function (x, y) { return x + y; };
var Person = /** @class */ (function () {
    //For such properties we need getter and setter functions
    function Person(id, name) {
        var _this = this;
        // register():string{
        //     return `${this.id} is now registered`
        // }
        this.register = function () {
            return "".concat(_this.id, " is now registered");
        };
        this.id = id,
            this.name = name;
    }
    return Person;
}());
var mike = new Person(2, 'Mike Jordan');
//Access Modifiers or Data Modifiers
//Extending Classes (SubClass)
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(id, name, position) {
        var _this = _super.call(this, id, name) || this;
        _this.position = position;
        return _this;
    }
    return Employee;
}(Person));
//Generics used to build resuuable components
function getArray(items) {
    return new Array().concat(items);
} //We can add generic to this array so that it when we create an array of numbers , it has only numbers and when we create an array of strings , it has only strings.
function anotherGetArray(items) {
    return new Array().concat(items);
}
//Here T is our type(or we can say it acts as a placeholder)
var numArray = getArray([1, 2, 3, 4]);
var strArray = getArray(['Mike', 'Kobe', 'Leo']);
// numArray.push('hello') is an OK command till now
var anotherNumArray = anotherGetArray([1, 2, 3, 4]);
var anotherStringArray = anotherGetArray(['Mike', 'Kobe', 'Leo']);
// anotherNumArray.push('Hello') throws an error
//Using typescript with react
// npx create-react-app newApp --template typescript
//If we dont know what type a variable may have , we should assign it unknown type instead of any
var iDontKnow;
var Astitva = {
    name: 'Astitva',
    age: 20,
    roll: 478120440882
};
//Void / Never / Any / Unknown
// Void is a set of undefined and null
//Any turns off typescript checks completely
//function with never cannot be executed to the end(i.e we cnt really have code that reaches the end)
function A() {
    throw "never";
    console.log("Astitva");
}
//Unknown is an alternative to any
var vAny = 10;
var vUnknown = 10;
var s1 = vAny; //executes wthhout error
// const s2:string = vUnknown //throws an error
//Type Assertion using as
var s2 = vUnknown;
var pageNumber = '1';
// const numericPageNumber:number = pageNumber;   Error
// const numericPageNumber:number = pageNumber as number ;    Error
var numericPageNumber = pageNumber;
//as is extensively used for working with DOM using Ts
//Static properties are accessible only on the class itself and not on the instances
//Generics
//All generic data types are written inside <>
var createObjectWithId = function (obj) {
    return (__assign(__assign({}, obj), { id: 1 }));
};
var objUser = {
    name: 'Astitva'
};
var obj1 = createObjectWithId(objUser);
console.log(obj1);
//Alternative Way
var obj2 = createObjectWithId(obj1);
var obj3 = createObjectWithId('foo'); //works
//If we want the generic to be object only
var createObjectWithIdGeneric = function (obj) {
    return (__assign(__assign({}, obj), { id: 1 }));
};
//We dont know what T is but whatever it is is assigned to the data
var aUser = {
    id: 'A',
    data: {
        name: 'Astitva'
    }
};
var bUser = {
    id: 'B',
    data: ['three', 'men', 'in', 'a', 'boat']
};
//Reading data types specifies in libraries
//We can use enums as data types
var Status;
(function (Status) {
    Status[Status["NotStarted"] = 0] = "NotStarted";
    Status[Status["InProgress"] = 1] = "InProgress";
    Status[Status["Done"] = 2] = "Done";
})(Status || (Status = {}));
var inProgressStatus = Status.InProgress;
console.log(typeof Status, typeof inProgressStatus);
//Always prefix or postfix your type i.e enum as StatusEnum , interface as StatusInterface
