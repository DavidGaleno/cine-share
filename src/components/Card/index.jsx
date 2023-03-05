import styled from 'styled-components';
import { useContext, useState, useEffect } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { GlobalContext } from 'context/GlobalContext';
import { Link } from 'react-router-dom';
export const Card = ({ id, title, cover }) => {
    const { favorites, setFavorites } = useContext(GlobalContext)
    useEffect(() => {
        if (favorites.length === 0) localStorage.removeItem('favorites')
        else localStorage.setItem('favorites', favorites)
    }, [favorites])
    return (
        <Container>
            <Link to={`/player/${id}`}>
                <CardImage src={cover} alt={title} />
            </Link>

            <CardDescription>
                <MovieName to={`/player/${id}`}>{title}</MovieName>
                {favorites.includes(id.toString()) ?
                    <FavoriteIcon className='favorite-icon' onClick={() => setFavorites(favorites.filter(movieId => movieId !== id.toString()))} style={{ color: 'red', fontSize: '3rem' }} />
                    :
                    <FavoriteBorderIcon className='favorite-icon' onClick={() => {
                        setFavorites(favorites.length > 0 ? [...favorites, id.toString()] : [id.toString()])
                    }} style={{ fontSize: '3rem', color: 'white' }} />}
            </CardDescription>
        </Container>
    )
}

const MovieName = styled(Link)`
    font-size: 2.2rem;
        font-weight: 500;
        text-align:center;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow-x: hidden;
        overflow-y: none;
        width: 85%;
        color:white;
        text-decoration: none;
`
const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    background-color:gray;
    gap: 1rem;
    .favorite-icon{
        &:hover{
            cursor:pointer;
        }
    }
`

const CardImage = styled.img`
width:100%;   
height:100%;
`

const CardDescription = styled.div`
   width:100%;   
   display:flex;
    flex-direction:column;
    align-items:center;
    gap: 1rem;
    padding-bottom: 1rem;
`