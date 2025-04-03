import './App.css';
import BookItem from './components/bookItem/BookItem';
import Books from './components/books/Books';

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
      <Books books={books} />
    </>
  );
}

export default App;
