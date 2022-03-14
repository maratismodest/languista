import React, {useEffect} from 'react';
import {YMInitializer} from 'react-yandex-metrika';
import AppHeader from "components/AppHeader/AppHeader";
import {game} from "./database/database";
import AppRoutes from "./components/AppRoutes/AppRoutes";
import AppsModal from "./components/Modals/AppsModal/AppsModal";
import './App.css'

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
                <AppRoutes/>
            </main>
            <AppsModal/>
            <YMInitializer accounts={[87710163]} options={{webvisor: true}}/>
        </div>
    );
}

export default App;
