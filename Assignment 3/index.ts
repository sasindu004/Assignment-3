import * as readlineSync from 'readline-sync';

// Book type definition
type Book = {
  title: string;
  author: string;
  ISBN: string;
};

// Array of books
let books: Book[] = [];

// Function to add a book
function addBook() {
  const title = readlineSync.question('Enter book title: ');
  const author = readlineSync.question('Enter book author: ');
  const ISBN = readlineSync.question('Enter book ISBN: ');
  const newBook: Book = { title, author, ISBN };
  books.push(newBook);
  console.log(`Book ${title} added successfully.`);
}

// Function to view all books
function viewBooks() {
  if (books.length === 0) {
    console.log('No books in the library.');
  } else {
    for (let book of books) {
      console.log(`Title: ${book.title}, Author: ${book.author}, ISBN: ${book.ISBN}`);
    }
  }
}

// Function to delete a book
function deleteBook() {
  const ISBN = readlineSync.question('Enter the ISBN of the book you want to delete: ');
  const index = books.findIndex(book => book.ISBN === ISBN);
  if (index !== -1) {
    const deletedBook = books.splice(index, 1)[0];
    console.log(`Book "${deletedBook.title}" by ${deletedBook.author} (ISBN: ${deletedBook.ISBN}) deleted successfully.`);
  } else {
    console.log('Book not found.');
  }
}

// Function to display the main menu
function mainMenu() {
  let shouldExit = false;
  while (!shouldExit) {
    console.log('\n1. Add book\n2. View books\n3. Delete book\n4. Exit');
    const option = readlineSync.question('Choose an option: ');
    switch (option) {
      case '1':
        addBook();
        break;
      case '2':
        viewBooks();
        break;
      case '3':
        deleteBook();
        break;
      case '4':
        shouldExit = true;
        break;
      default:
        console.log('Invalid option. Please try again.');
    }
  }
  console.log('Goodbye! Exiting the application.');
}

// Running the application
mainMenu();
