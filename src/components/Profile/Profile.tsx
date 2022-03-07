import React, {useEffect, useState} from 'react';
import {game} from "database/database";
import MyBase from "../MyBase/MyBase";
import Typography from "@mui/material/Typography";

const Profile = () => {
    const [profile, setProfile] = useState(game)
    useEffect(() => {
        const storage = localStorage.getItem('game')
        if (storage) {
            setProfile(JSON.parse(storage))
        }

    }, [])

    const {correct, wrong} = profile

    return (
        <div>
            <Typography align='center' variant="h2" gutterBottom>PROFILE</Typography>
            <Typography variant="h5">
                Количество правильных ответов: {correct}
            </Typography>
            <br/>
            <Typography variant="h5">
                Количество неправильных ответов: {wrong}
            </Typography>
            <br/>
            <Typography variant="h6">
                Спасибо, что пользуетесь нашим приложением! Надеемся, что вы получаете от него пользу. Будем рады
                услышать ваши отзывы и пожелания в телеграмм-чате:
            </Typography>
            <Typography variant="h5">
                <a href='https://t.me/languista' style={{color: 'blue'}}>https://t.me/languista</a>
            </Typography>
            <MyBase/>
        </div>
    );
};

export default Profile;
