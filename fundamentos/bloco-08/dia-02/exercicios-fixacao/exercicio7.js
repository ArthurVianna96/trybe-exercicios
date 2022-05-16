const books = require('./books');

function authorUnique() {
  return books.every((book) =>
    !books.some((book2) =>
      (book.author.birthYear === book.author.birthYear)
    )
  )
}

console.log(authorUnique());