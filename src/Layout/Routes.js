import { createBrowserRouter } from "react-router-dom";
import About from "../Components/About/About";
import Error from "../Components/Error/Error";
import Food from "../Components/Food/Food";
import FoodDetails from "../Components/FoodDetails/FoodDetails";
import Foods from "../Components/Foods/Foods";
import Home from "../Components/Home/Home";
import Signup from "../Components/Signup/Signup";
import Main from "./Main";

const router = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, children: [
            {
                path: '/',
                loader: async () => {
                    return fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
                },
                element: <Home></Home>
            },
            {
                path: '/home',
                loader: async () => {
                    return fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
                },
                element: <Home></Home>
            },
            // {
            //     path: '/foods',
            //     loader: async () => {
            //         return fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
            //     },
            //     element: <Foods></Foods>
            // },
            { path: '/food', element: <Food></Food> },
            {
                path: '/food-details/:idMeals',
                loader: async ({ params }) => {
                    return fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.idMeals}`)

                },
                element: <FoodDetails></FoodDetails>
            },
            { path: '/about-us', element: <About></About> },
            { path: '/signup', element: <Signup></Signup> },
            { path: '*', element: <Error></Error> }
        ]
    },

])


export default router;