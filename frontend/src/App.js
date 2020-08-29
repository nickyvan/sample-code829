import React, { useState, useEffect } from 'react';

import Header from './components/Header/Header';
import NewBook from './components/Books/NewBook';
import BookList from './components/Books/BookList';
import './App.css';

function App() {
  const [loadedBooks, setLoadedBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchBooks = async () => {
      setIsLoading(true);
      const response = await fetch('http://localhost:5000/books');

      const responseData = await response.json();

      setLoadedBooks(responseData.books);
      setIsLoading(false);
    };

    fetchBooks();
  }, []);

  const addBookHandler = async (bookName, bookPrice) => {
    try {
      const newBook = {
        title: bookName,
        price: +bookPrice // "+" to convert string to number
      };
      let hasError = false;
      const response = await fetch('http://localhost:5000/book', {
        method: 'POST',
        body: JSON.stringify(newBook),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        hasError = true;
      }

      const responseData = await response.json();

      if (hasError) {
        throw new Error(responseData.message);
      }

      setLoadedBooks(prevBooks => {
        return prevBooks.concat({
          ...newBook,
          id: responseData.book.id
        });
      });
    } catch (error) {
      alert(error.message || 'Something went wrong!');
    }
  };

  return (
    <>
      <Header />
      <main>
        <NewBook onAddBook={addBookHandler} />
        {isLoading && <p className="loader">Loading...</p>}
        {!isLoading && <BookList items={loadedBooks} />}
      </main>
    </>
  );
}

export default App;
