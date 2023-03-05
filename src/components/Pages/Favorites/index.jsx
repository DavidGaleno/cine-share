import { GlobalContext } from "context/GlobalContext"
import { useContext, useEffect } from "react"
import styled from "styled-components"
import { SearchBar } from "components/SearchBar"
import { Card } from "components/Card"
import { SubTitle } from "components/SubTitle"
import { useOutletContext } from "react-router-dom"
import { getMovies, searchMovies } from "API/requistion"
export const Favorites = () => {
    const { favorites } = useContext(GlobalContext);
    const { movies, setMovies, inputValue, setInputValue } = useOutletContext()

    //Because all itens are excluded, react wont re-render the componentes and wont update local storage. So you need to put this so it can update favorites
    useEffect(() => {
        if (favorites.length === 0) localStorage.removeItem('favorites')
        else localStorage.setItem('favorites', favorites)
    }, [favorites])

    return (
        <Container>
            <SearchBar defaultValue={inputValue} onChange={async (e) => {
                if (favorites.length === 0) return
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
            {movies &&
                <MoviesContainer>
                    {movies.map(movie => (
                        favorites.includes(movie.id.toString()) &&
                        <Card key={movie.id} id={movie.id.toString()} title={movie.title} cover={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} />))}
                </MoviesContainer>}
            {favorites.length === 0 && <SubTitle>Não há itens nos seus favoritos</SubTitle>}
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