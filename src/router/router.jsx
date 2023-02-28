import { Home } from "components/Home/Home";
import { Favorites } from "components/Favorites/Favorites";
import { Routes } from "routes";

const { createBrowserRouter } = require("react-router-dom");
export const router = createBrowserRouter([
    {
        path: '/',
        element: <Routes />,
        children: [
            { path: '/', element: < Home /> },
            { path: '/favorites', element: <Favorites /> }
        ]
    }
])