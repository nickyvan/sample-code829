import React from 'react';

import './BookItem.css';

const BookItem = props => {
  return (
    <li className="book-item">
      <h2>{props.name}</h2>
      <p>Price: ${props.price}</p>
    </li>
  );
};

export default BookItem;
