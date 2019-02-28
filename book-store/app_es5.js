const form = document.getElementById('book-form');
const container = document.querySelector('.container');
const bookList = document.getElementById('book-list');

const ui = new UI();

function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

function UI() {}

UI.prototype.addBookToList = function (book) {
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="" class="delete">X</a></td>
    `;

    bookList.appendChild(row);
}

UI.prototype.clearFields = function () {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}

UI.prototype.showAlert = function (msg, cssClass) {
    const div = document.createElement('div');
    div.className = `alert ${cssClass}`;
    div.appendChild(document.createTextNode(msg));

    container.insertBefore(div, form);

    setTimeout(function() {
        document.querySelector('.alert').remove();
    }, 3000);
}

UI.prototype.deleteBook = function (target) {
    if (target.className === 'delete') {
        target.parentElement.parentElement.remove();
    }
}

loadEventListeners();

function loadEventListeners() {
    form.addEventListener('submit', addBook);
    bookList.addEventListener('click',removeBook);

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
        ui.clearFields();
    }


    e.preventDefault();
}

function removeBook(e) {
    ui.deleteBook(e.target);

    ui.showAlert('Book Removed', 'sucess');

    e.preventDefault();
}