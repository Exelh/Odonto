import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "../../reducers/Reducer";
import axios from 'axios'


export const initialState = {themes:{
  light: {
      font: 'black',
      background: 'white'
  },
  dark: {
      font: 'white',
      background: 'black'
  }
}, data: [], 
favs: JSON.parse(localStorage.getItem('favs')) || [], 
doctorSelected: {},

}



export const ContextGlobal = createContext();

const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [state, dispatch] = useReducer(reducer, initialState); 
  const url = `https://jsonplaceholder.typicode.com/users` 
  console.log(state)
  // const [theme, setTheme] = useState(themes.light);
  // const handleChangeTheme = () => {
  //   if (theme === themes.dark) setTheme(themes.light);
  //   if (theme === themes.light) setTheme(themes.dark);
  // };

  useEffect(() => {
    //Mando al LS
    localStorage.setItem('favs', JSON.stringify(state.favs))
}, [state.favs])

useEffect(() => {
  //Llamado a la API 
  axios(url)
  .then(res => dispatch({type: 'GET_LIST', payload: res.data})) //res.data.recipes
}, [])


  return (
    // <ContextGlobal.Provider value={{theme, handleChangeTheme}}>
    <ContextGlobal.Provider value={{state, dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider; 
export const useContextGlobal = () => useContext(ContextGlobal)