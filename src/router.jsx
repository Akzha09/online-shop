import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Sing from "./pages/Sing";
import Login from "./pages/Login";
import DetailProduct from "./pages/DetailProduct";
import Love from "./components/love/Love";
Love
import Bag from "./bag/Bag";



export const myRouter = createBrowserRouter([
    {
        path:"/",
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "about",
                element: <About/>
            },
            {
                path: "sing",
                element: <Sing/>
            },
            {
                path: "login",
                element: <Login/>
            },
            {
                path: "love",
                element: <Love/>
            },
            {
                path: "bag",
                element: <Bag/>
            },
           
           
            // {
            //     path: "contact",
            //     element: <Contact/>
            // },
        ]
    }
])