import BookItem from '../bookItem/BookItem';

const Books = ({ books }) => {
  return (
    <div className="d-flex justify-content-center flex-wrap">
      {books.map((book) => {
        return (
          <BookItem
            title={book.title}
            author={book.author}
            rating={book.rating}
            pageCount={book.pageCount}
            imageUrl={book.imageUrl}
            available={book.available}
          />
        );
      })}
    </div>
  );
};

export default Books;
