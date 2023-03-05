import { createContext, useState } from "react";
export const GlobalContext = createContext()
GlobalContext.displayName = 'Global Context'

export const GlobalContextProvider = ({ children }) => {
    const [favorites, setFavorites] = useState(localStorage.getItem('favorites') === null ? [] : localStorage.getItem('favorites').split(','))
    return (
        <GlobalContext.Provider value={{ favorites, setFavorites }} >
            {children}
        </GlobalContext.Provider >
    )
}