import { searchMovies } from 'API/requistion';
import { showMovieData } from 'API/requistion';
import { useEffect, useState } from 'react';
import './App.css';
function App() {
  const [movies, setMovies] = useState()
  useEffect(() => {
    const getMovies = async () => {
      setMovies(await searchMovies('Avatar'))
    }
    getMovies()
  }, [])

  return (
    <div className="App">
      {movies && movies.map(movie => (
        showMovieData(movie)
      ))}
    </div>
  );
}

export default App;
