// function Book (title, author) {
//     this.title;
//     this.author;
//     getSummary: function getSummary(title, author){
//         console.log(this.title);
//     }
// }
// // const getSummary = function(title, author){
// //     console.log(this.title);
// // }
// const book1 = new Book ('abc', 123);
// book1.getSummary();

// // object literal 

// const game = {
//     name: this.name,
//     year: this.year
// };
// const game1 = new game

// const book1 = {
//     title: 'Book One',
//     author: 'John Doe',
//     year: 2012,
//     getSummary: function(){
//         return `${this.title} and ${this.author} and ${this.year}`;
//     }
// }
// console.log(Object.values(book1));

// Constructor 
// function NewConstructor (parameter1, parameter2) {
//     console.log('initialized');
//     this.parameter1 = parameter1;
//     this.parameter2 = parameter2;
//     this.getSummary = function(){
//        return this.parameter1 + this.parameter2;
//     }
//     this.anotherFunction = function(a, b){
//         return a + b;
//     }
// }

// above code has function inside constructor 
// functions can be and should be put inside prototype for cleaner code 
function NewConstructor (parameter1, parameter2) {
    console.log('initialized');
    this.parameter1 = parameter1;
    this.parameter2 = parameter2;
    this.getSummary = function(){
       return this.parameter1 + this.parameter2;
    }
}
// function put in NewConstructor object contructor's prototype 
NewConstructor.prototype.anotherFunction = function(a, b){
    return a + b;
}
// instantiate an object (instantiate literally means in english represent)
const newObject1 = new NewConstructor(123, 345);
// when we instantiate an object whatever function is present inside the constructor runs 
const newObject2 = new NewConstructor(987, 876);
console.log(newObject1.parameter1);
console.log(newObject2.getSummary());
// you can do below thing but now use better go for function outside object 
console.log(newObject2.anotherFunction(1, 2));


// class Book {
//     constructor(title, year) {
//         this.title = title;
//         this.year = year
//     }
// }
function Book (title, year){
    this.title = title;
    this.year = year;
    this.getTitle = function (){
        console.log(this.title);
    }
}
// function inside prototype 
Book.prototype.getAge = function(){
    const todayDate = new Date();
    const todayYear = todayDate.getFullYear();
    console.log(todayYear-this.year);

}
const bookNew = new Book ('abc', 2000);
bookNew.getAge();
console.log('gettitle');
bookNew.getTitle();


// You can revise the data using methods or directly
// revise directly 
bookNew.year = 2014;
bookNew.getAge();
// create method and revise through it 
Book.prototype.reviseYear = function(newYear) {
    this.year = newYear;
}
bookNew.reviseYear(2012);
bookNew.getAge();


// Inheritance 

function Magazine (title, author, year, month){
    Book.call(this, title, year);
    this.author = author;
    this.month = month;
}
// for using function inside prototype of book constructor in magazine will need additional code 
Magazine.prototype = Object.create(Book.prototype);

//use magazine constructor inside proto remove below code to see book constructor
// can set any string as constructor 
Magazine.prototype.constructor = Magazine;

const newMag = new Magazine ('abc',"author-q",2009,"January");
console.log(newMag);
// function within Book constructor can be called directly 
newMag.getTitle();
// fucntions inside prototype of book constructor need additional code 
// below code isn't working because put below object initiation 
newMag.getAge();

// another method to create object and all its methods using Object of Protos see trav oop javascript 26:00 not done here

// functions made using es6 class and the methods inside them go straight to proto 

class Movie {
    constructor(name, year){
        this.name = name;
        this.year = year;
    }
    newFunction() {
        console.log(this.name);
    }
    // static functions dont need object instantiation and are called directly on object constructor 
    static functionName(i){
        console.log(i);
    }
}
const newMovie = new Movie ('movieName', 2010);
newMovie.newFunction();
// see log function has gone directly to proto without additional code 
console.log(newMovie);

// static function called directly on its object constructor 
Movie.functionName(1);
// static functions cannot be called on objects 

// subclass in ES6 with class replaces inheritance and you can use main class function directly in subclass without any additional code 

// Song subclass 
class Song extends Movie {
    constructor(name, year, genre) {
        super(name, year);
        this.genre = genre;
    }
    newSongFunction() {
        console.log(this.year);
    }
}
const newSong = new Song ('qwq', 2012, 'rock');
console.log(newSong);
console.log(newSong.genre);
console.log(newSong.name);
console.log(newSong.year);

// ran function from Movie without any inheritance and other additional code 
newSong.newFunction();
newSong.newSongFunction();



// In vanilla js there are lot of ways to write any type of code, so first break your project into logical steps/code and then see similar code/projects online how they have done it and then do your own code 


