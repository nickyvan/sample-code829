import React, { useState } from 'react';

import Input from '../Input/Input';
import Button from '../Button/Button';
import './NewBook.css';

const NewBook = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredPrice, setEnteredPrice] = useState('');

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const priceChangeHandler = (event) => {
    setEnteredPrice(event.target.value);
  };

  const submitBookHandler = (event) => {
    event.preventDefault();
    props.onAddBook(enteredTitle, enteredPrice);
  };

  return (
    <section id="new-book">
      <h2>Add Your Book</h2>
      <form onSubmit={submitBookHandler}>
        <Input
          type="text"
          label="Title"
          id="title"
          value={enteredTitle}
          onChange={titleChangeHandler}
        />
        <Input
          type="number"
          label="Price"
          step={1}
          id="price"
          value={enteredPrice}
          onChange={priceChangeHandler}
        />
        <Button type="submit">ADD BOOK</Button>
      </form>
    </section>
  );
};

export default NewBook;
