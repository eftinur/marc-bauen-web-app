import { createBrowserRouter } from "react-router-dom";
import AllServices from "../../component/AllServices/AllServices";
import Home from "../../component/Home/Home/Home";
import LogIn from "../../component/LogIn/LogIn";
import Registration from "../../component/Registration/Registration";
import ServiceDetails from "../../component/ServiceDetails/ServiceDetails";
import Main from "../../Layout/Main";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => {
                    return fetch('http://localhost:5000/services')
                }
            },
            {
                path: '/home',
                element: <Home></Home>,
                loader: () => {
                    return fetch('http://localhost:5000/services')
                }
            },
            {
                path: '/services',
                element: <AllServices></AllServices>,
               
            },
            {
                path: '/services/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({params}) => {
                    return fetch(`http://localhost:5000/services/${params.id}`)
                }
            },
            {
                path: '/register',
                element: <Registration></Registration>
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
        ]
    }
])

export default router;