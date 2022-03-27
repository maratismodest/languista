import React from 'react';
import Typography from "@mui/material/Typography";
import {Link} from "react-router-dom";
import {ROUTES} from "routes";
import Button from "@mui/material/Button";
import Logo from "assets/logo.png";

const Welcome = () => {
    return (
        <>
            <img src={Logo} alt="logo" width={128}/>
            <Typography align='center' variant="h2" gutterBottom>Languista</Typography>
            <Typography align='center' variant="body1" gutterBottom>Приложение для изучения английского : 200 основных
                слов и фраз в формате игры с озвучкой. Есть тренажер вашего произношения</Typography>
            <Link to={ROUTES.words}>
                <Button variant='contained' color='warning' size='large' sx={{mt: 2}}>
                    Words
                </Button>
            </Link>
            <Link to={ROUTES.phrases}>
                <Button variant='contained' color='warning' size='large' sx={{mt: 2}}>
                    Phrases
                </Button>
            </Link>
            <Link to={ROUTES.dictaphone}>
                <Button variant='contained' color='warning' size='large' sx={{mt: 2}}>
                    Dictaphone
                </Button>
            </Link>
        </>
    );
};

export default Welcome;
