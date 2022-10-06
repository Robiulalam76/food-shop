import { createBrowserRouter } from "react-router-dom";
import About from "../Components/About/About";
import Food from "../Components/Food/Food";
import Foods from "../Components/Foods/Foods";
import Home from "../Components/Home/Home";
import Signup from "../Components/Signup/Signup";
import Main from "./Main";

const router = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, children: [
            { path: '/', element: <Home></Home> },
            { path: '/home', element: <Home></Home> },
            { path: '/foods', element: <Foods></Foods> },
            { path: '/food', element: <Food></Food> },
            { path: '/about-us', element: <About></About> },
            { path: '/signup', element: <Signup></Signup> },
        ]
    }
])


export default router;