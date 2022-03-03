import React, {useCallback, useEffect, useMemo, useState} from 'react';
import Button from "@mui/material/Button";
// @ts-ignore
import {useSpeechSynthesis} from 'react-speech-kit';
// @ts-ignore
import _ from 'lodash'

import './App.css'

interface OptionProps {
    id: number,
    eng: string,
    rus: string,
    _id?: number
}

interface OptionsProps {
    list: OptionProps[],
    onClick: (id: number) => void
}

const base = [
    {id: 1, eng: 'Hello!', rus: 'привет'},
    {id: 2, eng: 'Goodbye!', rus: 'пока'},
    {id: 3, eng: 'See you!', rus: 'увидемся'},
    {id: 4, eng: 'How are you?', rus: 'как дела'},
    {id: 5, eng: 'I', rus: 'я'},
    {id: 6, eng: 'you', rus: 'ты, вы'},
    {id: 7, eng: 'he', rus: 'он'},
    {id: 8, eng: 'she', rus: 'она'},
    {id: 9, eng: 'it', rus: 'оно'},
    {id: 10, eng: 'we', rus: 'мы'},
    {id: 11, eng: 'they', rus: 'они'},
]

const Options = ({list, onClick}: OptionsProps) => {
    const shuffled: OptionProps[] = useMemo(() => _.shuffle(list)
        , [list])
    const res = shuffled.map((option, index) => {
        return (
            <li key={option.id}>
                <Button variant='contained' onClick={() => onClick(option.id)}>
                    {option.rus}
                </Button>
            </li>
        )
    })

    return (
        <ul className='Options'>
            {res}
        </ul>
    )
}

function App() {

    const [newOne, setNewOne] = useState(0)
    const options: OptionProps[] = useMemo(() => {
        return _.shuffle(base).slice(0, 4)
    }, [newOne])
    const [answer, setAnswer] = useState<number>(0)
    const {speak, voices} = useSpeechSynthesis();
    const voice = voices[4];

    console.log(options)

    useEffect(() => {
        console.log(answer)
    }, [answer])


    const checkAnswer = (e: any) => {
        e.preventDefault()
        if (answer === options[0].id) {
            alert('Верно!')
        } else {
            alert(`Неверно! Верно: ${options[0].rus}`)
        }
        setNewOne(prevState => prevState + 1)

    }

    const selectAnswer = useCallback((id: number) => {
        setAnswer(id)
    }, [answer])
    return (
        <div className='App'>
            <h1>Переведи!</h1>
            <h2>{options[0].eng}</h2>
            <Button variant='contained' color='success' onClick={() => speak({text: options[0].eng, voice: voice})}>Speak</Button>

            <Options list={options} onClick={selectAnswer}/>

            <Button onClick={checkAnswer} variant='contained' color='warning' disabled={answer === 0}>
                Проверить
            </Button>

        </div>
    );
}

export default App;
