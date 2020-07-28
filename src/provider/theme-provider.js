import { default as DarkTheme} from '../global/themes/darkTheme'    
import { default as LightTheme} from '../global/themes/lightTheme'    
import React, { useState } from 'react'

const ThemeContext = React.createContext(LightTheme);

const ThemeProvider = (props) => {
    const [themes, setThemes] = useState(LightTheme);

    const togleButton = () => {
        if (themes === LightTheme){
            setThemes(DarkTheme);
        }else{
            setThemes(LightTheme);
        }
    }
    
    return (
        <ThemeContext.Provider value={{themes, togleButton}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export { ThemeProvider, ThemeContext}
