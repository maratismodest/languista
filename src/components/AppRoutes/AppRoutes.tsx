import React, {ReactNode} from "react";
import {Route, Routes} from "react-router-dom";
import {ROUTES} from "routes";
import {phrases, words} from "database/database";
import Welcome from "components/Welcome/Welcome";
import Game from "components/Game/Game";
import Profile from "components/Profile/Profile";


interface RouteInterface {
    path: string,
    component: ReactNode
}

const routes: RouteInterface[] = [
    {
        path: ROUTES.main,
        component: <Welcome/>
    },
    {
        path: ROUTES.words,
        component: <Game words={words}/>
    },
    {
        path: ROUTES.phrases,
        component: <Game words={phrases}/>
    },
    {
        path: ROUTES.profile,
        component: <Profile/>
    }

]

const AppRoutes = () => {
    return (
        <Routes>
            {routes.map(({path, component}) =>
                <Route key={path} path={path} element={component}/>)}
        </Routes>
    )
}

export default AppRoutes
