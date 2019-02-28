const form = document.getElementById('book-form');
const container = document.querySelector('.container');
const bookList = document.getElementById('book-list');


class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
    constructor() {
    }

    addBookToList(book) {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="" class="delete">X</a></td>
        `;

        bookList.appendChild(row);
    }

    clearFields() {
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }

    showAlert(msg, cssClass) {
        const div = document.createElement('div');
        div.className = `alert ${cssClass}`;
        div.appendChild(document.createTextNode(msg));

        container.insertBefore(div, form);

        setTimeout(function () {
            document.querySelector('.alert').remove();
        }, 3000);
    }

    deleteBook(target) {
        if (target.className === 'delete') {
            target.parentElement.parentElement.remove();
        }
    }
}

class Store {
    static getBooks() {
        let books;

        if (localStorage.getItem('books') === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }

        return books;
    }

    static displayBooks() {
        let books = Store.getBooks();

        books.forEach(function (book) {
            ui.addBookToList(book);
        });
    }

    static addBook(book) {
        const books = Store.getBooks();

        books.push(book);

        localStorage.setItem('books', JSON.stringify(books));
    }

    static removeBook(isbn) {
        let books = Store.getBooks();

        books.forEach(function (book, index) {
            if (book.isbn === isbn) {
                books.splice(index, 1);
            }
        });

        localStorage.setItem('books', JSON.stringify(books));
    }
}

const ui = new UI();
loadEventListeners();
function loadEventListeners() {
    form.addEventListener('submit', addBook);
    bookList.addEventListener('click', removeBook);
    document.addEventListener('DOMContentLoaded', Store.displayBooks);
}

function addBook(e) {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    const book = new Book(title, author, isbn);

    if (title === '' || author === '' || isbn === '') {
        ui.showAlert('Please fill in all fields', 'error');
    } else {
        ui.addBookToList(book);
        ui.showAlert('Book Added', 'sucess');
        Store.addBook(book);
        ui.clearFields();
    }


    e.preventDefault();
}

function removeBook(e) {
    ui.deleteBook(e.target);

    ui.showAlert('Book Removed', 'sucess');

    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

    e.preventDefault();
}