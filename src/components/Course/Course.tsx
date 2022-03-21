import React from 'react';
import {Link} from "react-router-dom";
import {COURSE} from "routes";
import classes from './Course.module.scss'
import Typography from "@mui/material/Typography";

const Course = () => {
    return (
        <div className={classes.course}>
            <Link to={COURSE.syllables}>
                <Typography align='center' variant="h3" gutterBottom>
                    Слоги
                </Typography>
            </Link>
        </div>
    );
};

export default Course;
