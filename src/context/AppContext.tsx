import {createContext, ReactNode, useEffect, useState} from "react";

const AppContext = createContext<any>({})
export default AppContext

interface AppProviderProps {
    children: ReactNode
}

export const AppProvider = ({children}: AppProviderProps) => {
    const [state, setState] = useState(true)
    const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([])
    const [voice, setVoice] = useState<SpeechSynthesisVoice | undefined>(undefined)

    useEffect(() => {
        const voicesArr = window.speechSynthesis.getVoices()
        if (voicesArr.length > 0) {
            const res = state ? voicesArr.find(x => x.lang === 'en-US' || x.lang === 'en-GB') : voicesArr.find(x => x.lang === 'ru-RU')
            setVoice(res)
            setVoices(voicesArr)
        }

    }, [window.speechSynthesis, state])

    return <AppContext.Provider value={{state, setState, voices, setVoices, voice, setVoice}}>{children}</AppContext.Provider>
}
