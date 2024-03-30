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






// book new object entry event

// book local storage event

// table entry from local storage event foreach loop on local storage

// delete event 


//consts
const titleInput = document.getElementById('titleInput');
    const authorInput = document.getElementById('authorInput');
    const isbnInput = document.getElementById('isbnInput'); 
    const warning = document.getElementById('warning');



// book object contructor 

class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}
// UI class 
class Ui {
    static displayBook() {
        const StoredBooks = [
            {
                title: 'Book One',
                author: 'Author One',
                isbn: '1111',
            },
            {
                title: 'Book Two',
                author: 'Author Two',
                isbn: '2222',
            }
        ]
        const books = StoredBooks;
        console.log(books);
        books.forEach((i) => {
            Ui.addBookToList(i);
        });
        // above for each does the same as below for loop 
        // for (let i=0; i < books.length; i++) {
        //     console.log(books[i]);
        //     Ui.addBookToList(books[i]);
        // }
    }
    static addBookToList(i) {
        const bookList = document.getElementById('bookList');
        const row = document.createElement('tr');
        row.innerHTML = `<tr>
        <td>${i.title}</td>
        <td>${i.author}</td>
        <td>${i.isbn}</td>
        <td><div class="bg-danger text-center d-inline-block px-2 text-white delete">X</div></td>
        </tr>`;
        bookList.appendChild(row);
    }
    static deleteInputs (){
        titleInput.value = ""; 
        authorInput.value = "";
        isbnInput.value = ""
    }
    
}

document.addEventListener('DOMContentLoaded', Ui.displayBook());

// add Book from input 
const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if(titleInput.value !== "" && authorInput.value !== "" && isbnInput.value !== ""){
        console.log(titleInput);
        const book = new Book (titleInput.value, authorInput.value, isbnInput.value);
        Ui.addBookToList(book);
        warning.style.display = 'none';
        Ui.deleteInputs();
    }
    else {
        warning.style.display = 'block';
        warning.style.setProperty('display', 'block', 'important');
    }
    
});

// delete 
   
const tableItem = document.querySelector('#table');
tableItem.addEventListener('click', (e) => {
    if(e.target.classList.contains('delete')){
        alert()
        e.target.parentElement.parentElement.remove();
    }
})