import React from 'react';
import AppHeader from "./components/AppHeader/AppHeader";
import Game from "./components/Game/Game";
import './App.css'


function App() {

    return (
        <div className='App'>
            <AppHeader/>
            <main>
                <Game/>
            </main>
        </div>
    );
}

export default App;
