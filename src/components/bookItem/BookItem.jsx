import React from 'react';

const BookItem = ({
  title,
  author,
  raiting,
  pageCount,
  available,
  imageUrl,
}) => {
  return (
    <div>
      <img src={imageUrl} alt={title} className="image" />
      <h2>{title}</h2>
      <h3>{author}</h3>
      <div>{raiting}</div>
      <p>{pageCount} páginas</p>
      <p>{available ? 'Disponible' : 'Reservado'}</p>
    </div>
  );
};

export default BookItem;
