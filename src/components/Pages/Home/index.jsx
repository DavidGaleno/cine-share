import { Card } from 'components/Card';
import { SearchBar } from 'components/SearchBar';
import { CircularProgress } from '@mui/material';
import { SubTitle } from 'components/SubTitle';
import styled from 'styled-components';
import { getMovies, searchMovies } from 'API/requistion';
import { useOutletContext } from 'react-router-dom';

export const Home = () => {
    const { movies, setMovies, inputValue, setInputValue } = useOutletContext()
    return (
        <Container>
            <SearchBar defaultValue={inputValue} onChange={async (e) => {
                if (e.target.value === "") {
                    setMovies(await getMovies())
                    localStorage.removeItem('input-value')
                    setInputValue('')
                    return
                }
                setMovies(await searchMovies(e.target.value))
                setInputValue(e.target.value)
                localStorage.setItem('input-value', e.target.value)
            }} />
            <MoviesContainer>
                {movies ? movies.map(movie => (
                    <Card key={movie.id} id={movie.id.toString()} title={movie.title} cover={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} />
                )) : < CircularProgress />}
            </MoviesContainer>
            {movies && movies.length === 0 && <SubTitle>Não há filmes correspondentes</SubTitle>}
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