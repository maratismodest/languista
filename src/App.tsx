import React, {useEffect} from 'react';
import {Route, Routes} from "react-router-dom";
import {YMInitializer} from 'react-yandex-metrika';

import AppHeader from "components/AppHeader/AppHeader";
import Game from "components/Game/Game";
import Profile from "components/Profile/Profile";

import {game} from "./database/database";

import './App.css'

// react-yandex-metrika

function App() {
    useEffect(() => {
        const storage = localStorage.getItem('game')
        if (!storage) {
            localStorage.setItem('game', JSON.stringify(game))
        }
    }, [])
    return (
        <div className='App'>
            <AppHeader/>

            <main>
                <Routes>
                    <Route path="/" element={<Game/>}/>
                    <Route path="profile" element={<Profile/>}/>
                </Routes>

            </main>
            <YMInitializer accounts={[87710163]} options={{webvisor: true}}/>
        </div>
    );
}

export default App;
