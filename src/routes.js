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

  useEffect(() => {
    if (location.pathname === '/') setRoute('home')
    else setRoute(location.pathname.replace('/', ''))
  }, [location])

  return (
    <Container>
      <GlobalContextProvider>
        <Header />
        <Banner route={route} />
        <Title label={route === 'home' ? 'Um Lugar para Guardar Seus Videos e Filmes' : 'Meus Favoritos'} />
        <RouteContainer>
          <Outlet />
        </RouteContainer>
        <Footer />
      </GlobalContextProvider>
    </Container>
  );
}

const RouteContainer = styled.div`
  flex: 1;
  display:flex;
  justify-content:center;
  align-items:center;
  padding:1rem;
  background-color:white;
`
const Container = styled.div`
  display:flex;
  flex-direction:column;
  width:100vw;
  height:100vh;
  background-color:black; 
`


export default Routes;
