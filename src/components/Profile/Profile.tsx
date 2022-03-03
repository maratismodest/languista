import React, {useEffect, useState} from 'react';
import {game} from "database/database";

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
            <h2>Profile</h2>
            <p>Статистика</p>
            <div>
                Количество правильных ответов: {correct}
            </div>
            <div>
                Количество неправильных ответов: {wrong}
            </div>
        </div>
    );
};

export default Profile;
