import { showPopularMovies } from "API/requistion";
import { createContext, useState } from "react";
export const GlobalContext = createContext()
GlobalContext.displayName = 'Global Context'

export const GlobalContextProvider = ({ children }) => {
    const [movies, setMovies] = useState()
    const getMovies = async () => setMovies(await showPopularMovies())
    const [favorites, setFavorites] = useState(localStorage.getItem('favorites') === null ? [] : localStorage.getItem('favorites').split(','))
    return (
        <GlobalContext.Provider value={{ favorites, setFavorites, getMovies, movies }}>
            {children}
        </GlobalContext.Provider>
    )
}