import React, {useCallback, useMemo, useState} from 'react';
import Button from "@mui/material/Button";
// @ts-ignore
import {useSpeechSynthesis} from 'react-speech-kit';
// @ts-ignore
import _ from 'lodash'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import {database} from "../../database/database";
import {IWordDTO} from "../../models/WordDTO";
import Typography from "@mui/material/Typography";


interface OptionsProps {
    list: IWordDTO[],
    onClick: (id: number) => void
}


const Options = ({list, onClick}: OptionsProps) => {
    const shuffled: IWordDTO[] = useMemo(() => _.shuffle(list)
        , [list])
    const res = shuffled.map((option, index) => {
        return (
            <li key={option.id}>
                <Button sx={{width: '100%'}} variant='contained'
                        onClick={() => onClick(option.id)}
                        size='large'
                >
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


const Game = () => {
    const [newOne, setNewOne] = useState(0)
    const options: IWordDTO[] = useMemo(() => {
        return _.shuffle(database).slice(0, 4)
    }, [newOne])
    const [answer, setAnswer] = useState<number>(0)
    const {speak, voices} = useSpeechSynthesis();


    const voice = voices.find((x: any) => x.name === 'Google UK English Female')


    const checkAnswer = (e: any) => {
        e.preventDefault()
        if (answer === options[0].id) {
            alert('Верно!')
        } else {
            alert(`Неверно! Верно: ${options[0].rus}`)
        }
        setNewOne(prevState => prevState + 1)
        setAnswer(0)
    }

    const selectAnswer = useCallback((id: number) => {
        setAnswer(id)
    }, [answer])

    // if (!voice || !speak || !voices) {
    //     return null
    // }
    console.log("voices", voices)
    console.log("voice", voice)
    let utterance = new SpeechSynthesisUtterance("Hello world!");

    return (
        <div className='game'>
            <Typography align='center' variant="h2" gutterBottom>{options[0].eng}</Typography>
            <Button onClick={() => speechSynthesis.speak(utterance)}>Hello world!</Button>
            <Button
                sx={{width: '100%'}}
                endIcon={<PlayCircleOutlineIcon/>} variant='contained' color='success'
                onClick={() => speak({text: options[0].eng, voice: voice})} size='large'>Speak</Button>

            <Options list={options} onClick={selectAnswer}/>

            <Button sx={{width: '100%'}} onClick={checkAnswer} variant='contained' color='warning'
                    disabled={answer === 0} size='large'>
                Проверить
            </Button>
        </div>
    );
};

export default Game;
