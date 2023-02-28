import { searchMovies } from 'API/requistion';
import { showMovieData } from 'API/requistion';
import { Footer } from 'components/Footer/Footer';
import { Header } from 'components/Header/Header';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
export const Routes = () => {
  const [movies, setMovies] = useState()
  useEffect(() => {
    const getMovies = async () => {
      setMovies(await searchMovies('Avatar'))
    }
    getMovies()
  }, [])

  return (
    <div className="Routes">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Routes;
