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
    const [state, setState] = useState(false)
    return (
        <Lightdark.Provider value={{state, setState}}>
            {children}
        </Lightdark.Provider>
    )
}

export default Context

export const useLightdark = () => useContext(Lightdark)