import React, { createContext, useContext, useState } from 'react'
import {users} from '../data/data'
const AppContext = createContext({user:null});

export const AppContextProvider = ({children}) => {
    const [user,setUser] = useState(users[0]);
    // const [user,setUser] = useState(JSON.parse(localStorage.getItem('twitter-clone-user')));

    //controllers
    const login = ()=>{
        console.log('loggin in');
    }
    const logout = ()=>{
        console.log('registering');
    }
    const register = ()=>{
        console.log('loggin out');
    }
    const share = {user,login,logout,register}
  return  <AppContext.Provider value={{...share}} > {children} </AppContext.Provider>
}

export const useAppContext = ()=>{
    return useContext(AppContext);
}