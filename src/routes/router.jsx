import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Blog from "../pages/Blog/Blog";
import Chef from "../pages/Chef/Chef";
import LogIn from "../pages/Login/LogIn";
import PagesLayout from "../layouts/PagesLayout";
import LogInLayout from "../layouts/LogInLayout";
import Register from "../pages/Login/Register";
import ViewRecipes from "../pages/ViewRecipes/ViewRecipes";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import PrivateRoutes from "./PrivateRoutes";
import Home from "../pages/Home/Home";
import AboutUs from "../pages/AboutUs/AboutUs";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path:"/",
                element: <Home></Home>
            }
        ]
    },
    {
        path: "pages",
        element: <PagesLayout></PagesLayout>,
        children: [
            {
                path: "blog",
                element: <Blog></Blog>
            },
            {
                path: "Chef",
                element: <Chef></Chef>,
                loader: ()=> fetch('https://assignment10-server-nahidahmed47.vercel.app/allData')
            },
            {
                path: "about_us",
                element: <AboutUs></AboutUs>
            },
            {
                path: "view_recipes/:id",
                element: <PrivateRoutes><ViewRecipes></ViewRecipes></PrivateRoutes>,
                loader: ({params})=> fetch(`https://assignment10-server-nahidahmed47.vercel.app/recipes/${params.id}`)
            }
        ]
    },
    {
        path: "user",
        element: <LogInLayout></LogInLayout>,
        children:[
            {
                path: "login",
                element: <LogIn></LogIn>
            },
            {
                path: "register",
                element: <Register></Register>
            }
        ]
    }
])

export default router;