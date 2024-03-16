import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom"
import PropTypes from 'prop-types';
import { Context } from "../context/AuthProvider";
import LoadingPage from "../Shared/LoadingPage";

const AdminRoute = ({children}) => {
    const {newUser, loading} = useContext(Context)
    const location = useLocation()
    const email = newUser?.email
    // console.log(location)

    if(loading)
    return <LoadingPage/>

    if(email==='admin@mail.com')
        return children

  return <Navigate state={location.pathname} to="/caution"></Navigate>
}

AdminRoute.propTypes = {
  children: PropTypes.node,
}

export default AdminRoute