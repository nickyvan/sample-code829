import React from 'react';

import BookItem from './BookItem';
import './BookList.css';

const BookList = props => {
  let content;
  if (!props.items || props.items.length === 0) {
    content = <p>Could not find any books. Maybe create one?</p>;
  } else {
    content = (
      <ul className="book-list">
        {props.items.map(p => (
          <BookItem key={p.id} name={p.title} price={p.price} />
        ))}
      </ul>
    );
  }

  return <section id="books">{content}</section>;
};

export default BookList;
