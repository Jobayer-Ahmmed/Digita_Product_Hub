import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom"
import PropTypes from 'prop-types';
import { Context } from "../context/AuthProvider";
import LoadingPage from "../Shared/LoadingPage";

const PrivateRoute = ({children}) => {
    const {newUser, loading} = useContext(Context)
    const location = useLocation()
    // console.log(location)

    if(loading)
    return <LoadingPage/>

    if(newUser)
        return children


  return <Navigate state={location.pathname} to="/login"></Navigate>
}

PrivateRoute.propTypes = {
  children: PropTypes.node,
}

export default PrivateRoute