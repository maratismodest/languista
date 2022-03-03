import React, {useEffect} from 'react';
import {Route, Routes} from "react-router-dom";
import AppHeader from "components/AppHeader/AppHeader";
import './App.css'
import Game from "./components/Game/Game";
import {game} from "./database/database";
import Profile from "./components/Profile/Profile";


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
                    <Route path="profile" element={<Profile />}/>
                </Routes>

            </main>
        </div>
    );
}

export default App;
