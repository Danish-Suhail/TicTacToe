import React, {createContext, useState} from 'react'

export const Names = createContext();

const Context = ({children}) =>{
    const [names, setNames] = useState({firstPlayer: "", secondPlayer:""});

    return <Names.Provider value={{names, setNames}}>{children}</Names.Provider>
}

export default Context;