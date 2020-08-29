const express = require('express');
const bodyParser = require('body-parser');
const uuid = require('uuid/v4');

const app = express();

const DUMMY_BOOKS = []; // just for testing

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE, OPTIONS'
  );
  next();
});

app.get('/books', (req, res, next) => {
  res.status(200).json({ books: DUMMY_BOOKS });
});

app.post('/book', (req, res, next) => {
  const { title, price } = req.body;

  if (!title || title.trim().length === 0 || !price || price <= 0) {
    return res.status(422).json({
      message: 'Please enter a valid title and price.'
    });
  }

  const createdBook = {
    id: uuid(),
    title,
    price
  };

  DUMMY_BOOKS.push(createdBook);

  res.status(201).json({ message: 'Created new book.', book: createdBook });
});

app.listen(5000); // start Node + Express server on port 5000
