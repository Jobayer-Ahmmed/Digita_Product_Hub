import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Register from "../Pages/Register/Register.jsx"
import Login from "../Pages/Login/Login.jsx";
import ErrorPage from "../Pages/Error/ErrorPage.jsx";
import AdminPanel from "../Layouts/AdminPanel.jsx";
import AdminLogin from "../adminSystem/Login/AdminLogin.jsx";
import Dashboard from "../adminSystem/dashboard/dashboard/Dashboard.jsx";
import DashboardHome from "../adminSystem/dashboard/dashboardHome/DashboardHome.jsx";
import AddCourse from "../adminSystem/dashboard/addCourse/AddCourse.jsx";
import EditCourse from "../adminSystem/dashboard/editCourse/EditCourse.jsx";
import SeeCourse from "../adminSystem/dashboard/seeCourses/SeeCourse.jsx";
import URL from "../URL/URL.js";
import AddEvent from "../adminSystem/dashboard/addEvent/AddEvent.jsx";
import SeeEvent from "../adminSystem/dashboard/seeEvents/SeeEvent.jsx";
import EditEvent from "../adminSystem/dashboard/editEvent/EditEvent.jsx";
import Profile from "../Pages/profile/Profile.jsx";
import CardDetails from "../Pages/Card/CardDetails.jsx";
import ToEnroll from "../Pages/toEnroll/ToEnroll.jsx";
import Payment from "../Pages/toEnroll/Payment.jsx";


const routes = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:"/",
                element:<Home/>,
            },
            {
                path:"/register",
                element:<Register/>
            },
            {
                path:"/login",
                element:<Login/>
            },

            {
                path: "/profile",
                element:<Profile/>
            },
            {
                path:"/course/:id",
                element:<CardDetails/>,
                loader: async ({params})=> fetch(`${URL}/admin/dashboard/course/${params.id}`)
            },
            {
                path:"/course/to-enroll/:id",
                element:<ToEnroll/>,
                loader: async ({params})=> fetch(`${URL}/admin/dashboard/course/${params.id}`)
            },
            {
                path:"/course/conform-payment",
                element:<Payment/>
            }

        ]
    },
    {
        path:"/admin",
        element:<AdminPanel/>,
        children:[
            {
                path: "/admin",
                element: <AdminLogin/>
            },
            {
                path:"/admin/dashboard",
                element:<Dashboard/>,
                children:[
                    {
                        path:"/admin/dashboard",
                        element:<DashboardHome/>
                    },
                    {
                        path:"/admin/dashboard/course/add",
                        element:<AddCourse/>
                    },
                    {
                        path:"/admin/dashboard/course",
                        element:<SeeCourse/>

                    },
                    {
                        path:"/admin/dashboard/course/:id",
                        element: <EditCourse/>,
                        loader: async ({params})=> fetch(`${URL}/admin/dashboard/course/${params.id}`)
                    },
                    {
                        path:"/admin/dashboard/event/add",
                        element:<AddEvent/>
                    },
                    {
                        path:"/admin/dashboard/event",
                        element: <SeeEvent/>
                    },
                    {
                        path:"/admin/dashboard/event/:id",
                        element: <EditEvent/>,
                        loader: async ({params})=> fetch(`${URL}/admin/dashboard/event/${params.id}`)
                    },

                ]
            }
        ]
    }

])

export default routes