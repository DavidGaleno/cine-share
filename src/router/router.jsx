import { Home } from "components/Home";
import { Favorites } from "components/Favorites";
import { Routes } from "routes";
import { Player } from "components/Player";

const { createBrowserRouter } = require("react-router-dom");
export const router = createBrowserRouter([
    {
        path: '/',
        element: <Routes />,
        children: [
            { path: '/', element: < Home /> },
            { path: '/favorites', element: <Favorites /> },
            { path: '/player/:id?', element: <Player /> }
        ]
    }
])