const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

function formatedBookNames(booksList) {
  return booksList.map((book) => {
    const { name, genre, author: { name: authorName } } = book;
    return `${name} - ${genre} - ${authorName}`;
  })
}

console.log(formatedBookNames(books));

function nameAndAge(booksList) {
  const authorsList = booksList.map((book) => {
    const { author: { name, birthYear }, releaseYear } = book;
    const age = releaseYear - birthYear;
    return {
      age,
      author: name
    }
  })
  return authorsList.sort((a, b) => a.age - b.age);
}

console.log(nameAndAge(books));

function fantasyOrScienceFiction(booksList) {
  return booksList.filter((book) => book.genre.toLowerCase() === 'fantasia' || book.genre.toLowerCase() === 'ficção científica');
}

console.log(fantasyOrScienceFiction(books));

function oldBooksOrdered(booksList) {
  const today = new Date();
  const currentYear = today.getFullYear();
  const oldBooks = booksList.filter((book) => currentYear - book.releaseYear > 60);
  return oldBooks.sort((a, b) => a.releaseYear - b.releaseYear);
}

console.log(oldBooksOrdered(books));

const expectedResult = [
  'Frank Herbert',
  'George R. R. Martin',
  'Isaac Asimov',
  'J. R. R. Tolkien',
];

function fantasyOrScienceFictionAuthors(booksList) {
  const fantasyOrScienceBooks = booksList.filter((book) => book.genre.toLowerCase() === 'fantasia' || book.genre.toLowerCase() === 'ficção científica');

  const authorsList = fantasyOrScienceBooks.map((book) => book.author.name);
  return authorsList.sort();
}

console.log(fantasyOrScienceFictionAuthors(books));

function oldBooks(booksList) {
  const today = new Date();
  const currentYear = today.getFullYear();
  const oldBooks = booksList.filter((book) => currentYear - book.releaseYear > 60);
  return oldBooks.map((book) => book.name);
}

console.log(oldBooks(books));

function authorWith3DotsOnName(booksList) {
  const book = booksList.filter((book) => {
    const { author: { name } } = book;
    const expectedRegex = /[A-z]\./ig;
    const numberOfMatches = name.match(expectedRegex);
    if (!numberOfMatches) return false;
    return numberOfMatches.length === 3;
  });
  return book[0].name;
}

console.log(authorWith3DotsOnName(books));