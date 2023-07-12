import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './Routes/App/App';
import reportWebVitals from './reportWebVitals';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import QuizPage from "./Routes/QuizPage/QuizPage";
import {StateContext} from "./stateContext";
import SummaryPage from "./Routes/SummaryPage/SummaryPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
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
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <StateContext.Provider value={JSON.parse(`{
            "chapters": [
                {
                    "image": "/media.png",
                    "title": "Meteo",
                    "score": 0,
                    "questions": [
                        {
                            "image": "media.png",
                            "question": "Wraz ze wzrostem wysokości ciśnienie:",
                            "answers": [
                                "rośnie, co wpływa na zaburzenia pracy serca",
                                "maleje w następstwie czego mogą wystąpić objawy choroby wysokościowej",
                                "jest stałe i nie ma znaczenia dla organizmu pilota",
                                "rośnie, ale zmiana jest tak mała, że nie wpływa na pracę organizmu pilota"
                            ],
                            "correctAnswer": 1,
                            "additionalLink": "http://www.example.com"
                        },
                        {
                            "image": "path/to/question2.jpg",
                            "question": "Niedotlenienie organizmu podczas wykonywania lotu:",
                            "answers": [
                                "może wystąpić na skutek przebywania na dużej wysokości",
                                "może spowodować zaburzenia pracy błędnika",
                                "ma wpływ na bezpieczeństwo wykonywania lotu",
                                "wszystkie odpowiedzi są prawidłowe"
                            ],
                            "correctAnswer": 2,
                            "additionalLink": "http://www.example.com"
                        }
                    ]
                },
                {
                    "image": "/media.png",
                    "title": "Człowiek i możliwości",
                    "score": 0,
                    "questions": [
                        {
                            "image": "path/to/question3.jpg",
                            "question": "Question 3",
                            "answers": [
                                "Answer 1",
                                "Answer 2",
                                "Answer 3",
                                "Answer 4"
                            ],
                           "correctAnswer": 2,
                            "additionalLink": "http://www.example.com"
                        },
                        {
                            "image": "path/to/question4.jpg",
                            "question": "Question 4",
                            "answers": [
                                "Answer 1",
                                "Answer 2",
                                "Answer 3",
                                "Answer 4"
                            ],
                           "correctAnswer": 2,
                            "additionalLink": "http://www.example.com"
                        }
                    ]
                }
            ]}`)}>
        <RouterProvider router={router} />
      </StateContext.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
