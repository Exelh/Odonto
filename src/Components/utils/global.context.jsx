import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { reducer } from "../../reducers/reducer";
import axios from 'axios'


export const initialState = {
 themes:{
  theme: "true" || "false",
}, 
data: [], 
favs: JSON.parse(localStorage.getItem('favs')) || [], 
doctorSelected: {},
}
export const ContextGlobal = createContext();

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState); 
  const {themes} = state;
  const [theme, setTheme] = useState(themes.theme);
  const url = `https://jsonplaceholder.typicode.com/users`; 

  useEffect(() => {
    localStorage.setItem('favs', JSON.stringify(state.favs))
}, [state.favs])

useEffect(() => {
  axios(url)
  .then(res => dispatch({type: 'GET_LIST', payload: res.data}))
},[])

  return (
    <ContextGlobal.Provider value={{state, theme, setTheme, dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};
export default ContextProvider; 
export const useContextGlobal = () => useContext(ContextGlobal);