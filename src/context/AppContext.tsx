import {createContext, ReactNode, useState} from "react";

const AppContext = createContext<any>({})
export default AppContext

interface AppProviderProps {
    children: ReactNode
}

export const AppProvider = ({children}: AppProviderProps) => {

    const [state, setState] = useState(false)

    console.log(state)
    return <AppContext.Provider value={{state, setState}}>{children}</AppContext.Provider>
}