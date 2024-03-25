import './App.css'
import { useEffect, useState } from 'react';
import Movie from './components/Movie';
import result from './data/topMovies.json'
import Filter from './filter.jsx';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [top100, setTop100] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState("");

  // const result = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  useEffect(() => {
    // This will run only once after the initial render
    showResult();
  }, []); // Empty dependency array ensures this effect runs only once after initial render

  function showResult() {
    setTop100(result);
    setFiltered(result);
  }

  return (
    <div className='App'>

      <Filter
        top100={top100}
        setFiltered={setFiltered}
        filtered={filtered}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
      />

      <motion.div layout className='popular-movies'>
        <AnimatePresence>
          {filtered.map((movie) => (
            <Movie key={movie.rank} movie={movie} />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

export default App
