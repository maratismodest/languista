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
            <Typography>
                Количество правильных ответов: {correct}
            </Typography>
            <Typography>
                Количество неправильных ответов: {wrong}
            </Typography>
            <MyBase />
        </div>
    );
};

export default Profile;
