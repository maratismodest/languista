import React, {useCallback, useEffect, useMemo, useState} from 'react';
import Button from "@mui/material/Button";
// @ts-ignore
import _ from 'lodash'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import {database} from "database/database";
import {IWordDTO} from "models/WordDTO";
import Typography from "@mui/material/Typography";
import MyModal from "../MyModal/MyModal";


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
        const [open, setOpen] = useState(false);
        const handleOpen = () => setOpen(true);
        const handleClose = () => setOpen(false);
        const [modal, setModal] = useState('')

        const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([])
        const [voice, setVoice] = useState<SpeechSynthesisVoice | undefined>(undefined)
        const [newOne, setNewOne] = useState(0)
        const options: IWordDTO[] = useMemo(() => {
            return _.shuffle(database).slice(0, 4)
        }, [newOne])
        const [answer, setAnswer] = useState<number>(0)

        const checkAnswer = (e: any) => {
            e.preventDefault()
            const isCorrect = answer === options[0].id
            const storage = localStorage.getItem('game')
            if (storage) {
                const res = JSON.parse(storage)
                const {correct, wrong} = res
                if (isCorrect) {
                    res.correct = correct + 1
                } else {
                    res.wrong = wrong + 1
                }

                localStorage.setItem('game', JSON.stringify(res))
            }

            const text = isCorrect ? 'Верно!' : `Неверно! Верно: ${options[0].rus}`
            setModal(text)
            handleOpen()


            setNewOne(prevState => prevState + 1)
            setAnswer(0)
        }

        const selectAnswer = useCallback((id: number) => {
            setAnswer(id)
        }, [answer])

        useEffect(() => {
            const voicesArr = window.speechSynthesis.getVoices()
            if (voicesArr.length > 0) {
                const res = voicesArr.find(x => x.lang === 'en-US' || x.lang === 'en-GB')
                setVoices(voicesArr)
                setVoice(res)
            }

        }, [window.speechSynthesis])


        let message = new SpeechSynthesisUtterance();
        message.lang = 'en-US';
        message.text = options[0].eng
        if (voice) {
            message.voice = voice
        }

        return (
            <>
                <div className='game'>
                    <Typography align='center' variant="h2" gutterBottom>{options[0].eng}</Typography>
                    <Button
                        sx={{width: '100%'}}
                        endIcon={<PlayCircleOutlineIcon/>} variant='contained' color='success'
                        onClick={() => {
                            speechSynthesis.speak(message)
                        }} size='large'>Speak</Button>

                    <Options list={options} onClick={selectAnswer}/>

                    <Button sx={{width: '100%'}} onClick={checkAnswer} variant='contained' color='warning'
                            disabled={answer === 0} size='large'>
                        Проверить
                    </Button>
                </div>
                <MyModal open={open} handleClose={handleClose} text={modal}/>
            </>
        );
    }
;

export default Game;
