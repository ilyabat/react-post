import About from "../pages/About";
import Login from "../pages/Login";
import Pages from "../pages/Pages";
import PostIdPage from "../pages/PostIdPage";

export const privateRoutes = [
    {path: '/about', element: About},
    {path: '/post', element: Pages},
    {path: '/post/:id', element: PostIdPage},

]

export const publicRoutes = [
    {path: '/login', element: Login},

]