import React, {FunctionComponent, useContext, useState} from 'react';
import AppContext from "context/AppContext";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import Button from "@mui/material/Button";
import './Course.scss'

const Course = () => {
    const [next, setNext] = useState(true)
    const {voice} = useContext(AppContext)
    const message = new SpeechSynthesisUtterance();
    message.lang = 'en-US';
    message.voice = voice

    const PlayButton: FunctionComponent<{ text: string }> = ({text}) => {
        return (
            <Button
                endIcon={<PlayCircleOutlineIcon/>} variant='contained' color='success'
                onClick={() => {
                    message.text = text
                    speechSynthesis.speak(message)
                }} size='large'>{text}</Button>
        )
    }
    const First = () => {
        return (
            <>
                <h2>
                    Английское сочетания букв ee ea
                </h2>
                <p>
                    Английское сочетания букв ee ea передают звук[i?]. Данный звук похож на русскую И.
                </p>

                <ul>
                    <li>
                        Bee[bi?] пчела
                        <PlayButton text={'Bee'}/>
                    </li>
                    <li>
                        Sea[si?] море
                        <PlayButton text={'Sea'}/>
                    </li>
                    <li>
                        Read [ri?d] читать
                        <PlayButton text={'Read'}/>
                    </li>
                </ul>
            </>
        )
    }

    const Second = () => {
        return (
            <>
                <h2>
                    Английское буквосочетание oo
                </h2>
                <p>
                    Английское буквосочетание oo передает длинный звук [u?], но если после сочетания букв oo стоит буква
                    k, то сочетание oo передает короткий звук [u].
                </p>

                <ul>
                    <li>
                        Food [fu?d] еда
                        <PlayButton text={'Food'}/>
                    </li>
                    <li>
                        Pool [pu?l] бассейн
                        <PlayButton text={'Pool'}/>
                    </li>
                    <li>
                        Book [b?k] книга
                        <PlayButton text={'Book'}/>
                    </li>
                    <li>
                        Look [l?k] смотреть
                        <PlayButton text={'Look'}/>
                    </li>
                </ul>
            </>
        )
    }

    return (
        <div className='course'>
            {next ? <First/> : <Second/>}

            <Button
                endIcon={<PlayCircleOutlineIcon/>} variant='contained' color='success'
                onClick={() => {
                    setNext(prevState => !prevState)
                }} size='large'>Дальше</Button>

        </div>
    );
};

export default Course;