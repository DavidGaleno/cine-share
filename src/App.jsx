import { Footer } from 'components/Layout/Footer';
import { Header } from 'components/Layout/Header';
import { Banner } from 'components/Banner';
import { Title } from 'components/Title';
import { Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
import { useEffect, useState } from 'react';
import { GlobalContextProvider } from 'context/GlobalContext';
import { getMovies, searchMovies } from 'API/requistion';

export const App = () => {
  const location = useLocation()
  const [movies, setMovies] = useState()
  const [inputValue, setInputValue] = useState(localStorage.getItem('input-value') === null ? '' : localStorage.getItem('input-value'))
  const [route, setRoute] = useState()
  const [label, setLabel] = useState()
  const [display, setDisplay] = useState()

  useEffect(() => {
    const loadMovies = async () => {
      if (inputValue) return setMovies(await searchMovies(inputValue))
      setMovies(await getMovies())
    }
    loadMovies()
  }, []);

  useEffect(() => {
    if (location.pathname === '/') {
      setRoute('home')
      setLabel('The Place to Keep Your Movies')
      setDisplay('block')
    }
    else if (location.pathname === '/favorites') {
      setRoute('favorites')
      setLabel('Favorites')
      setDisplay('block')
    }
    else if (location.pathname.includes('player')) {
      setRoute('player')
      setLabel('Player')
      setDisplay('block')
    }
    else {
      setDisplay('none')
    }
  }, [location])



  return (
    <GlobalContextProvider>
      <Header />
      <Banner display={display} route={route} />
      <Title route={route}>{label}</Title>
      <Container>
        <Outlet context={{ movies, setMovies, inputValue, setInputValue }} />
      </Container>
      <Footer />
    </GlobalContextProvider>
  );
}

const Container = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  padding:1rem;
  background-color:black;
`



export default App;
