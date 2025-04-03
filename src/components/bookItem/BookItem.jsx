import React from 'react';
import { Badge, Card, Button } from 'react-bootstrap';

const BookItem = ({
  title,
  author,
  raiting,
  pageCount,
  available,
  imageUrl,
}) => {
  return (
    <Card style={{ width: '22rem' }} className="mx-3">
      <Card.Img
        height={400}
        variant="top"
        src={imageUrl}
        alt={title}
        className="image"
      />
      <Card.Body>
        <div className="mb-2">
          {available ? (
            <Badge bg="success">Disponible</Badge>
          ) : (
            <Badge bg="danger">No disponible</Badge>
          )}
        </div>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle>{author}</Card.Subtitle>
        <div>{raiting}</div>
        <p>{pageCount} páginas</p>
        <Button>Actualizar titulo</Button>
      </Card.Body>
    </Card>
  );
};

export default BookItem;
