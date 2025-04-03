import './App.css';
import BookItem from './components/bookItem/BookItem';

function App() {
  const books = [
    {
      title: 'El Resplandor',
      author: 'Stephen King',
      rating: '⭐⭐⭐⭐⭐',
      pageCount: 688,
      imageUrl: 'https://www.penguinlibros.com/ar/3005382/el-resplandor.jpg',
      available: true,
    },
    {
      title: 'It',
      author: 'Stephen King',
      rating: '⭐⭐⭐⭐⭐',
      pageCount: 1138,
      imageUrl: 'https://www.penguinlibros.com/ar/1596183/it.jpg',
      available: false,
    },
    {
      title: 'Misery',
      author: 'Stephen King',
      rating: '⭐⭐⭐⭐',
      pageCount: 310,
      imageUrl:
        'https://http2.mlstatic.com/D_NQ_NP_817962-MLC45934975838_052021-O.webp',
      available: true,
    },
    {
      title: 'Cementerio de Animales',
      author: 'Stephen King',
      rating: '⭐⭐⭐⭐',
      pageCount: 374,
      imageUrl:
        'https://images.cdn1.buscalibre.com/fit-in/360x360/d4/33/d43366e40276400b9ba41d0a3b4351b9.jpg',
      available: false,
    },
  ];
  return (
    <>
      <h2>Book champions app</h2>
      <p>¡Quiero leer libros!</p>
      <BookItem
        title={books[0].title}
        author={books[0].author}
        rating={books[0].rating}
        pageCount={books[0].pageCount}
        imageUrl={books[0].imageUrl}
        available={books[0].available}
      />
      <BookItem
        title={books[1].title}
        author={books[1].author}
        rating={books[1].rating}
        pageCount={books[1].pageCount}
        imageUrl={books[1].imageUrl}
        available={books[1].available}
      />
      <BookItem
        title={books[2].title}
        author={books[2].author}
        rating={books[2].rating}
        pageCount={books[2].pageCount}
        imageUrl={books[2].imageUrl}
        available={books[2].available}
      />
      <BookItem
        title={books[3].title}
        author={books[3].author}
        rating={books[3].rating}
        pageCount={books[3].pageCount}
        imageUrl={books[3].imageUrl}
        available={books[3].available}
      />
    </>
  );
}

export default App;
