import {createContext,useContext,useEffect,useState} from 'react';
import {api} from '../services/api.js';
const Context=createContext(null);
export function AuthProvider({children}){
 const [user,setUser]=useState(null),[loading,setLoading]=useState(true);
 const refresh=async()=>{try{const {data}=await api.get('/auth/me');setUser(data.user);}catch{setUser(null);}finally{setLoading(false);}};
 useEffect(()=>{refresh();},[]);
 const login=async(identity,password)=>{await api.post('/auth/login',{identity,password});await refresh();};
 const logout=async()=>{try{await api.post('/auth/logout');}finally{setUser(null);}};
 return <Context.Provider value={{user,loading,login,logout,refresh}}>{children}</Context.Provider>;
}
export const useAuth=()=>useContext(Context);