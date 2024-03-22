import './App.css'
import { useEffect, useState } from 'react';
import Movie from './components/Movie';
import result from './data/topMovies.json'
import Filter from './filter.jsx';

function App() {
  const [top100, setTop100] = useState([]);

  // const result = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  useEffect(() => {
    // This will run only once after the initial render
    showResult();
  }, []); // Empty dependency array ensures this effect runs only once after initial render

  function showResult() {
    setTop100(result);
  }

  return (
    <div className='App'>
      <Filter />
      <div className='popular-movies'>
        {top100.map((movie) => (
          <Movie key={movie.rank} movie={movie} />
        ))}
      </div>
    </div>
  )
}

export default App
