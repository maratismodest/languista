import React, {FunctionComponent, useContext, useState} from 'react';
import {Link} from "react-router-dom";
import AppContext from "context/AppContext";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import Button from "@mui/material/Button";
import './Course.scss'
import {COURSE, ROUTES} from "routes";

const Course = () => {


    return (
        <div className='course'>
            <Link to={COURSE.syllables}>Syllables</Link>
        </div>
    );
};

export default Course;
