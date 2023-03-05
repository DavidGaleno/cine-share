import { Card } from 'components/Card';
import { SearchBar } from 'components/SearchBar';
import { GlobalContext } from 'context/GlobalContext';
import { CircularProgress } from '@mui/material';
import { useContext, useEffect } from 'react';
import { Title } from 'components/Title';
import styled from 'styled-components';

export const Home = () => {
    const { movies, getMovies, searchInput } = useContext(GlobalContext);
    useEffect(() => {
        if (!movies) getMovies()
    }, []);



    return (
        <Container>
            <SearchBar onChange={(q) => {
                if (q.target.value === "") return getMovies()
                searchInput(q.target.value)
            }} />
            <MoviesContainer>
                {movies ? movies.map(movie => (
                    <Card key={movie.id} id={movie.id.toString()} title={movie.original_title} cover={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} />
                )) : < CircularProgress />}
            </MoviesContainer>
            {movies && movies.length === 0 && <Title>Não há filmes correspondentes</Title>}
        </Container>
    )
}


const MoviesContainer = styled.div`
    width:80%;
    display:grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    grid-gap: 3rem;
`

const Container = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    gap: 3rem;
`