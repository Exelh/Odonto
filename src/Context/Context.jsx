import { createContext, useContext, useEffect, useState } from "react";

export const themes = {
    light: {
        font: 'black',
        background: 'white'
    },
    dark: {
        font: 'white',
        background: 'black'
    }
};



export const Lightdark = createContext()

const Context = ({children}) => {
    const [theme, setTheme] = useState(themes.light);
    const handleChangeTheme = () => {
      if (theme === themes.dark) setTheme(themes.light);
      if (theme === themes.light) setTheme(themes.dark);
    };

    return (
        <Lightdark.Provider value={{theme, handleChangeTheme}}>
            {children}
        </Lightdark.Provider>
    )
}

export default Context
export const useLightdark = () => useContext(Lightdark)