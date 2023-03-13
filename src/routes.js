// eslint-disable-next-line max-len
const {
  addBookHandler,
  getAllBooksHandler,
  getBookByIdHandler,
  editBookByIdHandler,
  deleteBookByIdHandler,
} = require('./handler');

const routes = [
  // Adding book routes
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },
  // Getting all books routes
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
  },
  // Getting specified by id books routes
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: getBookByIdHandler,
  },
  // Edit book by id
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: editBookByIdHandler,
  },
  // Deleting book by id
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBookByIdHandler,
  },
];

module.exports = routes;
