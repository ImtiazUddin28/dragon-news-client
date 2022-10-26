import {createBrowserRouter} from "react-router-dom";
import Main from "../../Layout/Main";
import Login from "../../Pages/Auth/Login/Login";
import Register from "../../Pages/Auth/Register/Register";
import Category from "../../Pages/Category/Category";
import Home from "../../Pages/Home/Home";
import News from "../../Pages/News/News";
import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter([

    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/news')
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path: '/news/:id',
                element: <PrivateRoutes><News></News></PrivateRoutes>,
                loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element: <Register></Register>
            }
        ]
      },

])