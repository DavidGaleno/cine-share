import { Card } from 'components/Card';
import { GlobalContext } from 'context/GlobalContext';
import { useContext, useEffect } from 'react';
import styled from 'styled-components';

export const Home = () => {
    const { movies, getMovies } = useContext(GlobalContext);
    useEffect(() => {
        if (!movies) getMovies()
    }, []);
    


    return (
        <Container>
            {movies && movies.map(movie => (
                <Card key={movie.id} id={movie.id.toString()} title={movie.original_title} cover={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} />
            ))}
        </Container>
    )
}


const Container = styled.div`
    width:80%;
    display:grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    grid-gap: 3rem;
    flex:1;
`