import React, {FunctionComponent, useContext, useState} from 'react';
import AppContext from "context/AppContext";
import Button from "@mui/material/Button";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import classes from '../../Course.module.scss'
import Typography from "@mui/material/Typography";

interface TagInterface {
    tag: string,
    text: string
}

const PlayButton: FunctionComponent<{ text: string }> = ({text}) => {
    const {message} = useContext(AppContext)

    return (
        <Button
            className={classes.courseButton}
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
                    <Typography variant="h4" className={classes.courseBlock} key={text}>
                        {text}
                    </Typography>
                )
            }
            case 'p': {
                return (
                    <Typography
                        variant="h5"
                        gutterBottom
                        key={text}
                        className={classes.courseBlock}
                    >
                        {text}
                    </Typography>

                )
            }
            case 'li': {
                return (
                    <div className={classes.courseBlock} key={text}>
                        <Typography align='center' variant="h5" gutterBottom>{text}</Typography>
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
    },
    {
        tag: 'li',
        text: 'photo'
    }

]

const sh: TagInterface[] = [
    {
        tag: 'h2',
        text: 'Буквосочетание sh'
    },
    {
        tag: 'p',
        text: 'Буквосочетание sh в английском языке передает звук [?]. Этот звук похож на русскую букву Ш.'
    },
    {
        tag: 'li',
        text: 'She'
    },
    {
        tag: 'li',
        text: 'Shop'
    }

]

const ch: TagInterface[] = [
    {
        tag: 'h2',
        text: 'Буквосочетания ch и tch '
    },
    {
        tag: 'p',
        text: 'Буквосочетания ch и tch в английском языке передают звук [t?]. Этот звук похож на русское буквосочетания тч, но в английском это надо произнести одним звуком'
    },
    {
        tag: 'li',
        text: 'lunch'
    },
    {
        tag: 'li',
        text: 'teacher'
    },
    {
        tag: 'li',
        text: 'chicken'
    }

]

const ck: TagInterface[] = [
    {
        tag: 'h2',
        text: 'Английское буквосочетание ck'
    },
    {
        tag: 'p',
        text: 'Английское буквосочетание ck передает звук [k]. Данный звук похож на русскую К.'
    },
    {
        tag: 'li',
        text: 'Black'
    },
    {
        tag: 'li',
        text: 'Chicken'
    },
    {
        tag: 'li',
        text: 'Ticket'
    }

]

const Syllables = () => {
    const max = 5
    const [next, setNext] = useState(0)

    return (
        <div className={classes.course}>
            {next === 0 && getHtml(ea)}
            {next === 1 && getHtml(oo)}
            {next === 2 && getHtml(ph)}
            {next === 3 && getHtml(sh)}
            {next === 4 && getHtml(ch)}
            {next === 5 && getHtml(ck)}

            <div className={classes.courseNext}>
                <Button
                    endIcon={<PlayCircleOutlineIcon/>}
                    variant='contained'
                    color='success'
                    onClick={() => {
                        setNext(prevState => prevState + 1 === max ? 0 : prevState + 1)
                    }}
                    size='large'
                >Дальше</Button>
            </div>

        </div>

    );
};

export default Syllables;
