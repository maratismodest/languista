import React, {ReactNode} from "react";
import {Route, Routes} from "react-router-dom";
import {COURSE, ROUTES} from "routes";
import {phrases, words} from "database/database";
import Welcome from "components/Welcome/Welcome";
import Game from "components/Game/Game";
import Profile from "components/Profile/Profile";
import Course from "components/Course/Course";
import Syllables from "../Course/components/Syllables/Syllables";
import Dictaphone from "../Dictaphone/Dictaphone";
import {advanced} from "../../database/advanced";


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
        path: ROUTES.wordsAdvanced,
        component: <Game words={advanced}/>
    },
    {
        path: ROUTES.phrases,
        component: <Game words={phrases}/>
    },
    {
        path: ROUTES.profile,
        component: <Profile/>
    },
    {
        path: ROUTES.course,
        component: <Course />
    },
    {
        path: ROUTES.course + '/' + COURSE.syllables,
        component: <Syllables />
    },
    {
        path: ROUTES.dictaphone,
        component: <Dictaphone />
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
