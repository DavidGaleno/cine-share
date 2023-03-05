import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { Banner } from 'components/Banner';
import { Title } from 'components/Title';
import { Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
import { useEffect, useState } from 'react';
import { GlobalContextProvider } from 'context/GlobalContext';

export const Routes = () => {
  const location = useLocation()
  const [route, setRoute] = useState()
  const [label, setLabel] = useState()

  useEffect(() => {
    if (location.pathname === '/') {
      setRoute('home')
      setLabel('The Place to Keep Your Movies')
      return
    }
    if (location.pathname === '/favorites') {
      setRoute('favorites')
      setLabel('Favorites')
      return
    }
    if (location.pathname.includes('player')) {
      setRoute('player')
      setLabel('Player')
      return
    }
  }, [location])

  return (
    <GlobalContextProvider>
      <Header />
      <Banner route={route} />
      <Title route={route}>{label}</Title>
      <Container>
        <Outlet />
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



export default Routes;
