// Light dark mode toggle 
const light = document.getElementById('light');
const dark = document.getElementById('dark');
const htmlElement = document.querySelector('html');

light.addEventListener('click', () => {
    htmlElement.dataset.bsTheme = 'light';
    dark.classList.remove("active");
    light.classList.add("active");
})
dark.addEventListener('click', () => {
    htmlElement.dataset.bsTheme = 'dark';
    dark.classList.add("active");
    light.classList.remove("active");
})


// store class 
class Store {
    static getBooks () {
        let books;
        if(localStorage.getItem('books') === null) {
            books = [];
        }
        else{
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books; // Added return statement
    }
    static addBooks (item){
        const books = Store.getBooks();
        books.push(item);
        // localStorage.push(JSON.stringify(books));
        localStorage.setItem('books', JSON.stringify(books));
    }
    static removeBooks (isbn) {
        const books = Store.getBooks();
        books.forEach(function(book, index) {
           if(book.isbn === isbn){
            books.splice(index, 1);
           }
        });
        localStorage.setItem('books', JSON.stringify(books)); 
    }
}


// book class 
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
    
}

// Ui class 

class Ui {
     // store books which are to be UIed 
    //  below static should ideally be a function within which variable exists which contains value but currently leaving it as it is  
     static bookStorage() {
        const bookInfo = Store.getBooks();
        return bookInfo;
     }
    
     static addBooksToUi() {
        //  add book to Ui   just a connecting function between array and addToTable function
        const books = Ui.bookStorage();
        console.log('books');
        console.log(books);
        books.forEach((book)=>(Ui.addToTable(book)));
        
     }

      //add book to table method
    static addToTable(i){
       const newRow = document.createElement('tr');
       console.log(i);
        newRow.innerHTML = `<td>${i.title}</td>
                            <td>${i.author}</td>
                            <td>${i.isbn}</td>
                            <td><div class="bg-danger text-center d-inline-block px-2 text-white delete">X</div></td>`;
        const bookList = document.getElementById('bookList');
        bookList.appendChild(newRow);
    }
    static delete (e) {
        console.log(e.target.classList);
    if(e.target.classList.contains('delete')){
        e.target.parentElement.parentElement.remove();
        const isbn = e.target.parentElement.previousElementSibling.textContent;
        Store.removeBooks(isbn);
    } 
    }
    static deleteInputs () {
        titleInput.value = ""; 
        authorInput.value = "";
        isbnInput.value = ""
    }
    static alert (className, content, color) {
        const messageContainer = document.getElementById('message-container');
        const message = document.createElement('div');
        messageContainer.appendChild(message);
        message.className=`bg-${className} my-3 py-2 text-center display-5 text-${color} rounded`;
        message.innerText = content;
        setTimeout(
            () => message.remove(), 3000
        )
    }
}

//calladdbooktoui to check existing book adding
document.addEventListener('DOMContentLoaded', Ui.addBooksToUi());

//Event add book method
// addbook using form submit 
const form = document.getElementById('form');
const title = document.querySelector('#titleInput');
const author = document.querySelector('#authorInput');
const isbn = document.querySelector('#isbnInput');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(title.value !== "" && author.value !== "" && isbn.value !== ""){
        const newBook = new Book (title.value, author.value, isbn.value);
        Store.addBooks(newBook);
        Ui.addToTable(newBook);
        
        warning.style.display = 'none';
        Ui.deleteInputs();
        Ui.alert('success', 'Book Added', 'white');   
    }
    else {
        // warning.style.display = 'block';
        // warning.style.setProperty('display', 'block', 'important');
        Ui.alert('danger', 'Please add all details', 'white');   
    }
})


const table = document.querySelector('table');
//delete book method
table.addEventListener('click', (e) => {
    Ui.delete(e);
    // console.log(e.target.classList);
    // if(e.target.classList.contains('delete')){
    //     e.target.parentElement.parentElement.remove();
    // } 
});









// store class  // get books
// class Store {
     
//     static books () {
//         let book
//         if (localStorage.getItem('book') === null){
//             bookLocal = [];
//             console.log(bookLocal);
//             console.log(JSON.parse(bookLocal));
//             return "";
            
//         }
//         else {
//             const content = localStorage.getItem(bookLocal);
//             console.log(JSON.parse(bookLocal));
//             console.log(content);
//             return JSON.parse(bookLocal);
//         }
//     }
//     // add books 
//     static addBook (book) {
        
//         const currentBook = Store.books();
//         currentBook.push(book);

//         return localStorage.setItem(JSON.stringify(bookLocal, currentBook));
        
//         // cant directly add individual items have to get the whole string edit it and upload it as whole 
//     }
//      // remove books
//      static removeBook (isbn) {
//        const books = Store.books();
//         books.forEach((book, index) => {
//             if(book.isbn === isbn){
//                 books.splice(index, 1);
//             }
//         });
//         localStorage.setItem('books', JSON.stringify(books));
//      }
// }
// Store.books();



    

   
