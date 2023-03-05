import { Home } from "components/Pages/Home";
import { Favorites } from "components/Pages/Favorites";
import { App } from "App";
import { Player } from "components/Pages/Player";
import { NotFound } from "components/Pages/NotFound";

const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { path: '/', element: < Home /> },
            { path: '/favorites', element: <Favorites /> },
            { path: '/player/:id?', element: <Player /> },
            { path: '/*', element: <NotFound /> }
        ]
    }
])