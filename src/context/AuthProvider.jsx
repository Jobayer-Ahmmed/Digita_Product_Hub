import { useEffect, useState } from "react";
import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import auth from "../firebase/firebase.config";
import PropTypes from 'prop-types';

export const Context = createContext();

const AuthProvider = ({ children }) => {
  const [newUser, setNewUser] = useState();
  const [loading, setLoading] = useState(true);
  const [store, setStore] = useState({})
  
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const handleStore =(name, email, course_name, course_fee)=>{
    console.log(name, email, course_name, course_fee)
    return setStore({name, email, course_name, course_fee})    
  }



  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (myCurrentUser) => {
      setLoading(false);
      setNewUser(myCurrentUser);
    });
    return () => unSubscribe();
  }, []);
  

  const contextData = {
    newUser,
    login,
    logOut,
    createUser,
    loading,
    store,
    handleStore,
  };

  return <Context.Provider value={contextData}>{children}</Context.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node,
}
export default AuthProvider;
