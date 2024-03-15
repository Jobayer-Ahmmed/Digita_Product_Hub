import { useEffect, useState } from "react";
import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import auth from "../firebase/firebase.config";
import useAxios from "../hooks/useAxios/useAxios";

export const Context = createContext();

const AuthProvider = ({ children }) => {
  const [newUser, setNewUser] = useState();
  const [loading, setLoading] = useState(true);

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
  };

  return <Context.Provider value={contextData}>{children}</Context.Provider>;
};

export default AuthProvider;
