const books = require('./books');

function smallerName(booksList) {
  let nameBook = '';
  booksList.forEach((book) => {
    const { name } = book;
    name.length > nameBook.length ? nameBook = name : nameBook;
  })
  return nameBook;
}

console.log(smallerName(books));