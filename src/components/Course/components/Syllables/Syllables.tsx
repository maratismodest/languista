import React, {FunctionComponent, useContext, useState} from 'react';
import AppContext from "context/AppContext";
import Button from "@mui/material/Button";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import './Syllables.scss'

interface TagInterface {
    tag: string,
    text: string
}

const PlayButton: FunctionComponent<{ text: string }> = ({text}) => {
    const {message} = useContext(AppContext)

    return (
        <Button
            className='courseButton'
            endIcon={<PlayCircleOutlineIcon/>} variant='contained' color='success'
            onClick={() => {
                message.text = text
                speechSynthesis.speak(message)
            }} size='large'>{text}</Button>
    )
}

const getHtml = (arr: TagInterface[]) =>
    arr.map(({tag, text}) => {
        switch (tag) {
            case 'h2': {
                return (
                    <h2 key={text}>
                        {text}
                    </h2>
                )
            }
            case 'p': {
                return (
                    <p key={text}>
                        {text}
                    </p>
                )
            }
            case 'li': {
                return (
                    <div className={'some'} key={text}>
                        {text}
                        <PlayButton text={text}/>
                    </div>
                )
            }
            default:
                return (
                    <span key={'wrong'}>что-то пошло не так</span>
                )
        }
    })

const ea: TagInterface[] = [
    {
        tag: 'h2',
        text: 'Английское сочетания букв ee ea'
    },
    {
        tag: 'p',
        text: 'Английское сочетания букв ee ea передают звук[i?]. Данный звук похож на русскую И.',
    },
    {
        tag: 'li',
        text: 'Bee'
    },
    {
        tag: 'li',
        text: 'Sea'
    },
    {
        tag: 'li',
        text: 'Read'
    }
]

const oo: TagInterface[] = [
    {
        tag: 'h2',
        text: 'Английское буквосочетание oo'
    },
    {
        tag: 'p',
        text: 'Английское буквосочетание oo передает длинный звук [u?], но если после сочетания букв oo стоит буква k, то сочетание oo передает короткий звук [u].'
    },
    {
        tag: 'li',
        text: 'Food'
    },
    {
        tag: 'li',
        text: 'Pool'
    },
    {
        tag: 'li',
        text: 'Look'
    }

]

const ph: TagInterface[] = [
    {
        tag: 'h2',
        text: 'Английское буквосочетание ph'
    },
    {
        tag: 'p',
        text: 'Английский ph передает звук [f]. Очень похож на русский звук Ф.'
    },
    {
        tag: 'li',
        text: 'phone'
    },
    {
        tag: 'li',
        text: 'elephant'
    }

]

const Syllables = () => {
    const max = 2
    const [next, setNext] = useState(0)

    return (
        <div className='course'>
            {next === 0 && getHtml(ea)}
            {next === 1 && getHtml(oo)}
            {next === 2 && getHtml(ph)}

            <Button
                endIcon={<PlayCircleOutlineIcon/>} variant='contained' color='success'
                onClick={() => {
                    setNext(prevState => prevState + 1 === max ? 0 : prevState + 1)
                }} size='large'>Дальше</Button>
        </div>

    );
};

export default Syllables;
