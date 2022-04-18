import { useQuery } from '@apollo/client';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Logo from 'assets/logo.png';
import { GET_ALL_WORDS } from 'graphql/query/words';
import useDetectBrowser from 'helpers/useDetectBrowser';
import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from 'routes';

const Welcome = () => {
    const {data, loading, error, refetch} = useQuery(GET_ALL_WORDS)
    const browserName = useDetectBrowser();

    console.log(data)

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
                <Button disabled={browserName === 'Safari'} variant='contained' color='warning' size='large'
                        sx={{mt: 2}}>
                    Dictaphone
                </Button>
            </Link>
            {browserName === 'Safari' &&
                <Typography align='center'>Dictaphone is not supported in Safari/Apple</Typography>}
        </>
    );
};

export default Welcome;
