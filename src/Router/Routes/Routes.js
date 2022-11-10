import { createBrowserRouter } from "react-router-dom";
import AddServices from "../../component/AddServices/AddServices";
import AllServices from "../../component/AllServices/AllServices";
import Blogs from "../../component/Blogs/Blogs";
import ErrorPage from "../../component/ErrorPage/ErrorPage";
import Home from "../../component/Home/Home/Home";
import LogIn from "../../component/LogIn/LogIn";
import MyReviews from "../../component/MyReviews/MyReviews";
import PrivateRoute from "../../component/PrivateRoute/PrivateRoute";
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
                path: '/myreviews',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path: '/addservices',
                element: <PrivateRoute><AddServices></AddServices></PrivateRoute>
            },
            {
                path: '/register',
                element: <Registration></Registration>
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            }
        ]
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>
    }
])

export default router;