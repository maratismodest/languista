import React, {FunctionComponent, useContext, useState} from 'react';
import AppContext from "context/AppContext";
import Button from "@mui/material/Button";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import classes from '../../Course.module.scss'
import {ch, ck, ea, oo, ph, sh} from "./components/base";
import {getHtml} from "./components/getHtml";

export const PlayButton: FunctionComponent<{ text: string }> = ({text}) => {
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
