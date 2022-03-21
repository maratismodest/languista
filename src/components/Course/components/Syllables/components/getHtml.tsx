import {TagInterface} from "./base";
import Typography from "@mui/material/Typography";
import classes from "../../../Course.module.scss";
import React from "react";
import {PlayButton} from "../Syllables";

export const getHtml = (arr: TagInterface[]) =>
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