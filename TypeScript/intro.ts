const userQ = {name:'Astitva',email:'astitadubey1508@gmail.com'};

//Basic Types (Primitive):
let num: number = 2
let company: string = 'Astitva'
let isPublished = true
let anything: any = 5
anything = 'Hello , I am a string now'

let numberArray: number[] = [1,2,3,4,5]

//Tuple specifies the exact types inside the array
let person: [number , string , boolean] = [20,'Astitva',true]
//Tuple Array
let personArray: [number , string , boolean][] = [[20,'Astitva',true],[22 , 'Bagghad', true]]

//Union enables sinlge variable to hold more than one types
let productId: string | number 

//Enums allow us to declare a set of named constants, either numeric or string
enum Direction1{
    Up = 0,
    Down,
    Right,
    Left
}
enum Direction2{
    Up = 'Up',
    Down = 'Down',
    Right = 'Right',
    Left = 'Left'
}

//Objects
const user: {
    id: number,
    name: string
} = {
    id:1,
    name:'Astitva'
}
//or
type User = {
    id: number,
    name: string
}

const user1: User = {
    id:2,
    name:'Dhruv'
}

//Type Assertion -> explicitly telling the compiler that we want to treat an entity as a different type
let cid: any = 1
// let anotherCID = <number>cid
// let anotherCID = cid as number

//Note that 
let iAmAVar = 2; //is OK
//But to not define the function parameters type is not OK unless you change the config and change the noImplicitAny to false


//Functions
function addNum(num1: number , num2: number):number{
    const sum = num1+num2
    return (sum)
}
//Functions that don't return anything have a void return type


//Interfaces are custom types or specific structure to an object or function and are used similarily to custom types
interface userInterface{
    readonly id:number,  //This property cannot be reassigned
    name:string,
    age?: number  //age is optional and may or may not be included
}

let anotherUser: userInterface={
    id:2,
    name:'Astitva'
}

//Alternatively we can declare objects as(though it doesnt serve the best purpose of typescript)
let thisIsAnObject:Object={ 
    id:2,
    name:'Astitva'
}

//A Type is usually used with primitives and unions.You cant used interface with them
//Interfaces are usually used with objects

//Using Interfaces with functions
interface SumTwoNumber{
    (x: number, y: number): number
}



const add:(x:number,y:number)=>number=(x: number , y: number): number=>x+y 
//OR
const add1:SumTwoNumber=(x: number , y: number): number=>x+y 
//If the function uses an interface , then it must comply with the interface definitions

//Classes

interface PersonInterface{
    id: number,
    register(): string //Way to define functions inside interface
}

class Person implements PersonInterface{
    id: number //Property is public by default
    private name:string  //Property can be accessed only within the class
//For such properties we need getter and setter functions
    constructor(id: number,name: string){
        this.id = id,
        this.name = name    
    }

    // register():string{
    //     return `${this.id} is now registered`
    // }

    register=():string=>{
        return `${this.id} is now registered`
    }
}

const mike = new Person(2,'Mike Jordan')

//Access Modifiers or Data Modifiers

//Extending Classes (SubClass)
class Employee extends Person {
    position:string
    constructor(id: number , name:string , position:string){
        super(id,name)
        this.position = position
    }
}

//Generics used to build resuuable components

function getArray(items: any[]):any[]{
    return new Array().concat(items)
}//We can add generic to this array so that it when we create an array of numbers , it has only numbers and when we create an array of strings , it has only strings.
function anotherGetArray<T>(items: T[]):T[]{
    return new Array().concat(items)
}
//Here T is our type(or we can say it acts as a placeholder)

const numArray = getArray([1,2,3,4])
const strArray = getArray(['Mike','Kobe','Leo'])
// numArray.push('hello') is an OK command till now

const anotherNumArray = anotherGetArray<number>([1,2,3,4])
const anotherStringArray = anotherGetArray<string>(['Mike','Kobe','Leo'])

// anotherNumArray.push('Hello') throws an error


//Using typescript with react
// npx create-react-app newApp --template typescript

//If we dont know what type a variable may have , we should assign it unknown type instead of any
let iDontKnow:unknown;

//If we dont know what a function is going to return and we arent sure if the function even returns anything or not , use never type(Void returns undefined but never does not return anything)

//Extending Types
type PersonType = {
    name:string,
    age:number
}

type AadhaarType = {
    roll:number
}

type CitizenType = PersonType & AadhaarType;
//Alternatively
type CitizenTypeAlternative = PersonType & {
    roll:number
}

const Astitva:CitizenType={
    name:'Astitva',
    age:20,
    roll:478120440882
}

//Extending Interfaces
interface PersonKaInterface{
    name:string,
    age:number
}

interface AadharInerface{
    roll:number
}

interface Intermediary extends PersonInterface{
    roll:number
}

interface CitizenInterface extends Intermediary{

}

//You cannot extend two interfaces so need to use an intermediary

//Extending type inside interface
interface x extends CitizenType{}
//Extending Interface inside Type
type y=x & {}

// The most popular usecase for Union is checking for null

//Type Aliases
// We can create aliases for basic types and use them everywhere.e.g
type ID=string
type Mobile = number
interface IStudent{
    id:ID,
    studentName:string,
    phone:Mobile
}
interface ICollegeStudent{
    id:ID
    collegeStudentName:string
    phone:Mobile
}

//Void / Never / Any / Unknown
// Void is a set of undefined and null
//Any turns off typescript checks completely
//function with never cannot be executed to the end(i.e we cnt really have code that reaches the end)
function A():never{
    throw "never"
    console.log("Astitva")
}

//Unknown is an alternative to any
const vAny:any=10;
const vUnknown:unknown = 10;
const s1:string = vAny //executes wthhout error
// const s2:string = vUnknown //throws an error

//Type Assertion using as
const s2:string = vUnknown as string

const pageNumber:string = '1'; 
// const numericPageNumber:number = pageNumber;   Error
// const numericPageNumber:number = pageNumber as number ;    Error
const numericPageNumber:number = (pageNumber as unknown) as number;

//as is extensively used for working with DOM using Ts

//Static properties are accessible only on the class itself and not on the instances


//Generics
//All generic data types are written inside <>
const createObjectWithId=<T>(obj:T):T=>{
    return ({...obj , id:1})
}

interface objUserInterface{
    name:string
}
const objUser:objUserInterface={
    name:'Astitva'
}

const obj1 = createObjectWithId(objUser)
console.log(obj1)
//Alternative Way
const obj2 = createObjectWithId<objUserInterface>(obj1)
const obj3 = createObjectWithId<string>('foo') //works

//If we want the generic to be object only
const createObjectWithIdGeneric=<T extends object>(obj:T):T=>{
    return ({...obj , id:1})
}
// const obj4 = createObjectWithIdGeneric<string>('foo') throws an error

//Generics with interfaces
interface A<T>{
    id:string,
    data:T
}
//We dont know what T is but whatever it is is assigned to the data

const aUser:A<{name:string}>={
    id:'A',
    data:{
        name:'Astitva'
    }
}
const bUser:A<string[]>={
    id:'B',
    data:['three','men','in','a','boat']
}

//We can pass more than one data types inside generic 
interface multipleGenericInterface<T,V>{
    id:number,
    data:T,
    info:V
}

//Reading data types specifies in libraries

//We can use enums as data types
enum Status{
    NotStarted,
    InProgress,
    Done
}

//Always prefix or postfix your type i.e enum as StatusEnum , interface as StatusInterface

