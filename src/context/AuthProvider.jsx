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
  const [refId, setRefId] = useState()
  
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

  const handleRefId=(refId)=>{
    console.log(refId)
    return setRefId(refId)
  }

  const handleStore =(name, email, course_name, course_fee, ref_id)=>{
    // console.log(name, email, course_name, course_fee)
    return setStore({name, email, course_name, course_fee, ref_id})    
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
    handleRefId,
    refId
  };

  return <Context.Provider value={contextData}>{children}</Context.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node,
}
export default AuthProvider;
