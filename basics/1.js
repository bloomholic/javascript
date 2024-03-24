// Data Types
var age = 18;
let name = 'John';
let address = {
    houseNo: 4,
    houseBuildingName: 'grape',
    India: true,
    details: [400089, 'Maharashtra'],
    floor: undefined,
    parking: null
}
const array = ['apple', 'banana', 'santra'];
// {} signifies object inside which there are key-pairs
// [] signifies array inside which there are array


// strings 
// escape 
const esc = 'I don \' t \n know';
// \n is for new line 


var abc = "abcdefghijklmnopqrstuvwxyz";
console.log (abc.indexOf("4"));
console.log(array.indexOf('orange'));

// index0f doesn't works in objects

// typeof property for determining the type, doesn't works on null tpyes gives wrong object
console.log (typeof abc);
// since typeof is property and property don't need () , only functions and methods need ()

// concatenation
name = "Gian";
console.log('My name is ' + name + ' and my age is ' + age);

// new method for concatenation
// use backticks `` instead of single quotes''
console.log (`My name is ${name} and my age is ${age}`);

// length of a String
console.log(name.length);
// .toUpperCase();
// .toLowerCase();

// Kind of splitting
const subs =  name.substring(0,2);
console.log(subs);

// Splitting string to array
// split method takes in value by whatever you want to split it by
console.log(name.split(''));

const stringWithValues = 'Orange, Apple, Pear';
console.log(stringWithValues.split(' ,'));

// creating arrays
// using constructor 
const arrayWithConstructor = new Array(1,2,3.4);
// directly
const arraywithout = [5,4,5,6];

arraywithout[4] = 10;

console.log(arraywithout);

arraywithout.push(15);

console.log(arraywithout);

arraywithout.unshift(1);

console.log(arraywithout);

arraywithout.pop();

console.log(arraywithout);

// array and objects can be placed inside one another 
 const toDo = [
    {
        id: 1,
        text: 'Take Our Trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Getting Client',
        isCompleted: true
    },
    {
        id: 1,
        text: 'Watch TV',
        isCompleted: false
    }
 ]
console.log(toDo[1].text);

// for converting variable to json use method
console.log(JSON.stringify(toDo));
console.log(JSON.stringify(age));

// JSON.stringify() cannot handle circular references (objects or arrays that reference themselves), as it would result in an error. Additionally, functions and undefined values cannot be directly converted to JSON strings using JSON.stringify().
// Other than that JSON.stringify() handles everything

// Loops
for (let i=0; i<10; i++){
    console.log(i);
}
// while
let i=0;
while(i<10) {
    console.log(`While loop ${i}`);
    i++;
};
for (let i=0; i < toDo.length; i++) {
    console.log(toDo[i].isCompleted);
}
// another loop method 
for(let todos of toDo) {
    console.log(todos.id);
}
// or
for(let i of toDo) {
    console.log(i.text);
}
// forEach another loop
toDo.forEach(function(i) {
    console.log(i.id);
})
// filter another loop
// filter creates array of those elements which satisfies condition, it includes all children elements of it
let aaa = toDo.filter(function(d){
  return d.isCompleted === true;
});
console.log (aaa);
// join with other functions like map 
// map 
aaa = toDo.filter(function(d){
    return d.isCompleted === true;
  }).map(function(m){
    return m.text;
  });
  console.log (aaa);
// map creates array of those elements with condition satisfied 


// forEach map filter these are high order array methods helping to manipulate data in many ways 
let a = 9;
if(a===10){
    console.log('a=10');
}
else if (a>10) {
    console.log('a>10');
}
else{
    console.log('a<10');
}

// || means or 
let x = 2;
y = 15;
if (x>5 || y>14){
    console.log('x>5 || y>14');
}
// && means and 
x = 2;
y = 15;
if (x>5 && y>14){
    console.log('x>5 && y>14');
}
else (console.log('if statement not correct'));

// ? means then it is terniary operator 
a = 11; 
b = a > 10 ? 'statement is true':'statement is false';
console.log(b);

a = 9; 
b = a > 10 ? 'red':'blue';
console.log(b);

switch(b) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('neither');
        break; 
}
if(b==='red'){
    console.log('color is red');
}
else if(b==='blue'){
    console.log('color is blue');
}
else {
    console.log('color is different');
};

// NaN means not a number
// get NaN when try to add or do some mathematical thing with them and they are not numbers 

function addNums (num1 = 1, num2 = 2) {
    console.log(num1 + num2);
}
addNums ();

function addNums (num1 = 1, num2 = 2) {
    return num1 + num2;
}
console.log(addNums(5,5));

// Arrow functions 
const addNumsA = (num1 = 1, num2 = 2) => {
    console.log (num1 +num2);
}
addNumsA(3, 3);
let yo = (num1, num2) => num1+num2;
// => without {} returns it 
console.log(yo(6,6));

// object oriented programming 
// 2 ways to construct objects 
// object literals 
// object constructor function 
// constructor functions with prototypes and ES6 classes 
// constructor function with prototypes 

// function name for constructor function should start with capital 
function Person (firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = dob;
}

// Instantiate Object
const person1 = new Person('John', 'Doe', '4-3-1980');

// we created person object output is similar to object literal but has Person prefixed
console.log (person1);

const got = {
    firstName: 'firstName',
    lastName: 'lastName',
    dob: 'dob'
}
got.firstName = "John";
console.log(got);


function Bummer (game, age, dob) {
    this.me = game;
    this.age = age;
    this.dob = new Date(dob);
    this.getFullYear = function () {
        return this.dob.getFullYear();
    };
}
const player1 = new Bummer ('tennis', 19, '12-04-1990');
const player2 = new Bummer ('cricket', 24);
console.log(player1);
console.log(player2);
console.log(player1.getFullYear());

function Game (dance, sing) {
    this.dance = dance;
    this.sing = sing;
}
Game.prototype.rock = function () {
    return this.dance+this.sing;
}
let hammer = new Game (10, 12);
console.log(hammer.rock());

function good (a, b, c) {
    this.a = a;
}
class Pool {
    constructor (a, b, c) {
        this.a = a;
    }
    rock() {
        return this.a;
    } 
}
const lake = new Pool (4, 5, 6);
console.log(lake);
console.log(lake.rock());