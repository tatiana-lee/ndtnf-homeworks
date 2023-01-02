interface Book {
  name: string;
  isbn: string;
}

const book: Book = {
  name: "Harry Potter",
  isbn: "123456"
}

const container = document.getElementById('content')

if (container) {
  container.textContent = `Название книги: ${book.name}, ISBN: ${book.isbn}`
}