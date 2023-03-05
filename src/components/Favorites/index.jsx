import { GlobalContext } from "context/GlobalContext"
import { useContext, useEffect } from "react"
import styled from "styled-components"
import { Card } from "components/Card"
export const Favorites = () => {
    const { movies, favorites, getMovies } = useContext(GlobalContext);
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
            {movies && movies.map(movie => (
                favorites.includes(movie.id.toString()) &&
                <Card key={movie.id} id={movie.id.toString()} title={movie.original_title} cover={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} />))}
            {favorites.length === 0 && <h3>Não há itens nos seus favoritos</h3>}
        </Container>
    )
}

const Container = styled.div`
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