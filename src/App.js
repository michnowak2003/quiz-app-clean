import React from 'react';
import './index.scss';
import Home from './Routes/Home/Home';

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import QuizPage from "./Routes/QuizPage/QuizPage";
import {StateContext} from "./stateContext";
import SummaryPage from "./Routes/SummaryPage/SummaryPage";

const App = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home/>,
        },
        {
            path: "/quiz-page/:chapterId/:questionNumberParams",
            element: <QuizPage/>,
        },
        {
            path: "/summary-page/:chapterId",
            element: <SummaryPage/>,
        }
    ]);

    return(
            <StateContext.Provider value={{}}>
                <RouterProvider router={router}/>
            </StateContext.Provider>
    );
}

export default App;