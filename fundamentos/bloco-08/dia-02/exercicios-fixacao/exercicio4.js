const books = require('./books');

function booksOrderedByReleaseYearDesc(booksList) {
  return booksList.sort((a, b) => b.releaseYear - a.releaseYear);
}

console.log(booksOrderedByReleaseYearDesc(books));