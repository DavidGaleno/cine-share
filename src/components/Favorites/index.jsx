import { GlobalContext } from "context/GlobalContext"
import { useContext, useEffect } from "react"
import styled from "styled-components"
import { SearchBar } from "components/SearchBar"
import { Card } from "components/Card"
import { Title } from "components/Title"
export const Favorites = () => {
    const { movies, favorites, getMovies, searchInput } = useContext(GlobalContext);
    useEffect(() => {
        if (!movies) getMovies()
    }, []);
    //Because all itens are excluded, react wont re-render the componentes and wont update local storage. So you need to put this so it can update favorites
    useEffect(() => {
        if (favorites.length === 0) localStorage.removeItem('favorites')
        else localStorage.setItem('favorites', favorites)
    }, [favorites])

    return (
        <Container>
            <SearchBar onChange={(q) => {
                if (q.target.value === "") return getMovies()
                searchInput(q.target.value)
            }} />
            {movies &&
                <MoviesContainer>
                    {movies.map(movie => (
                        favorites.includes(movie.id.toString()) &&
                        <Card key={movie.id} id={movie.id.toString()} title={movie.original_title} cover={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} />))}
                </MoviesContainer>}
            {favorites.length === 0 && <Title>Não há itens nos seus favoritos</Title>}
            {movies && movies.length === 0 && <Title>Não há filmes correspondentes</Title>}
        </Container>
    )
}

const MoviesContainer = styled.div`
    width:80%;
    display:grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    grid-gap: 3rem;
    h3{
        color:white;
        font-size: 3rem;
        text-align: center;
        width:100%;
        height:100%
    }
`

const Container = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    gap: 3rem;
`