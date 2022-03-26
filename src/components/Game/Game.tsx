import React, {useCallback, useContext, useMemo, useState} from 'react';
import Button from "@mui/material/Button";
// @ts-ignore
import _ from 'lodash'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import {IWordDTO} from "models/WordDTO";
import Typography from "@mui/material/Typography";
import MyModal from "../Modals/MyModal/MyModal";
import AppContext from "context/AppContext";

interface OptionsProps {
    list: IWordDTO[],
    onClick: (id: number) => void,
    onDoubleClick: () => void
    state: boolean
}

const Options = ({list, onClick, state, onDoubleClick}: OptionsProps) => {
    const shuffled: IWordDTO[] = useMemo(() => _.shuffle(list)
        , [list])
    const res = shuffled.map((option, index) => {
        return (
            <li key={option.id}>
                <Button sx={{width: '100%'}} variant='contained'
                        onClick={() => onClick(option.id)}
                        onDoubleClick={() => {
                            onClick(option.id)
                            onDoubleClick()
                        }}
                        size='large'
                >
                    {state ? option.rus : option.eng}
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

interface GameProps {
    words: IWordDTO[]
}

const Game = ({words}: GameProps) => {
        const [open, setOpen] = useState(false);
        const {state, voice, message} = useContext(AppContext)
        const handleOpen = () => setOpen(true);
        const handleClose = () => {
            setOpen(false);
            setNewOne(prevState => prevState + 1)
            setAnswer(0)
        }
        const [modal, setModal] = useState('')

        const [newOne, setNewOne] = useState(0)
        const options: IWordDTO[] = useMemo(() => {
            return _.shuffle(words).slice(0, 4)
        }, [newOne, words])
        const [answer, setAnswer] = useState<number>(0)

        const checkAnswer = () => {
            const isCorrect = answer === options[0].id
            const storage = localStorage.getItem('game')
            if (storage) {
                const res = JSON.parse(storage)
                const {correct, wrong} = res
                isCorrect ? res.correct = correct + 1 : res.wrong = wrong + 1
                localStorage.setItem('game', JSON.stringify(res))
            }

            const text = isCorrect ? 'Верно!' : `Неверно! Верно: ${options[0].rus}`
            setModal(text)
            handleOpen()



        }

        const selectAnswer = useCallback((id: number) => {
            setAnswer(id)
        }, [answer])


        message.text = state ? options[0].eng : options[0].rus;


        return (
            <>
                <div className='game'>
                    <Typography align='center' variant="h3"
                                gutterBottom>{state ? options[0].eng : options[0].rus}</Typography>
                    <Button
                        sx={{width: '100%'}}
                        startIcon={<PlayCircleOutlineIcon/>} variant='contained' color='success'
                        onClick={() => {
                            speechSynthesis.speak(message)
                        }} size='large'>PLAY</Button>

                    <Options list={options} onClick={selectAnswer} state={state} onDoubleClick={checkAnswer}/>

                    <Button sx={{width: '100%'}} onClick={checkAnswer} variant='contained' color='warning'
                            disabled={answer === 0} size='large'
                    >
                        Проверить
                    </Button>
                </div>
                <MyModal open={open} handleClose={handleClose} text={modal}/>
            </>
        );
    }
;

export default Game;
