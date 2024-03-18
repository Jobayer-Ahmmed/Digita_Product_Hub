import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Register from "../Pages/Register/Register.jsx";
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
import EditUsername from "../Pages/editProfile/EditUsername.jsx";
import EditImage from "../Pages/editProfile/EditImage.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import Caution from "../Shared/Caution.jsx";
import AdminRoute from "./AdminRoute.jsx";
import EnrollmentDetails from "../adminSystem/dashboard/enrollmentDetails/EnrollmentDetails.jsx";
import axios from "axios";
import EventDetails from "../adminSystem/dashboard/eventDetatils/EventDetails.jsx";
import Card from "../Pages/Card/Card.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path:"/courses",
        element:<Card/>
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },

      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "/course/:id",
        element:<CardDetails />,
        loader: async ({ params }) =>
          fetch(`${URL}/admin/dashboard/course/${params.id}`),
      },
      {
        path: "/course/to-enroll/:id",
        element:<PrivateRoute><ToEnroll /></PrivateRoute>,
        loader: async ({ params }) =>fetch(`${URL}/admin/dashboard/course/${params.id}`),
      },
      {
        path: "/course/conform-payment",
        element: (
          <PrivateRoute>
            <Payment />
          </PrivateRoute>
        ),
      },
      {
        path: "/edit-username",
        element: (
          <PrivateRoute>
            <EditUsername />
          </PrivateRoute>
        ),
      },
      {
        path: "/edit-image",
        element: (
          <PrivateRoute>
            <EditImage />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminPanel />,
    children: [
      {
        path: "/admin",
        element: <AdminLogin />,
      },
      {
        path: "/admin/dashboard",
        element: (
          <AdminRoute>
            <Dashboard />
          </AdminRoute>
        ),
        children: [
          {
            path: "/admin/dashboard",
            element: (
              <AdminRoute>
                <DashboardHome />
              </AdminRoute>
            ),
          },
          {
            path: "/admin/dashboard/course/add",
            element: (
              <AdminRoute>
                <AddCourse />
              </AdminRoute>
            ),
          },
          {
            path: "/admin/dashboard/course",
            element: (
              <AdminRoute>
                <SeeCourse />
              </AdminRoute>
            ),
          },
          {
            path: "/admin/dashboard/course/:id",
            element: (
              <AdminRoute>
                <EditCourse />
              </AdminRoute>
            ),
            loader: async ({ params }) =>
              fetch(`${URL}/admin/dashboard/course/${params.id}`),
          },
          {
            path: "/admin/dashboard/event/add",
            element: (
              <AdminRoute>
                <AddEvent />
              </AdminRoute>
            ),
          },
          {
            path: "/admin/dashboard/event",
            element: (
              <AdminRoute>
                <SeeEvent />
              </AdminRoute>
            ),
          },
          {
            path: "/admin/dashboard/event/:id",
            element: (
              <AdminRoute>
                <EditEvent />
              </AdminRoute>
            ),
            loader: ({ params }) =>
              axios.get(`${URL}/admin/dashboard/event/${params.id}`),
          },
          {
            path:"/admin/dashboard/enrollment-details",
            element:<EnrollmentDetails/>,
          },
          {
            path:"/admin/dashboard/event-details",
            element:<EventDetails/>
          },

        ],
      },
    ],
  },

  {
    path: "/caution",
    element: <Caution />,
  },
]);

export default routes;
