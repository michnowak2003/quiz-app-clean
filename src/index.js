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
                    "image": "/human.webp",
                    "title": "Człowiek i możliwości",
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
            "image": "media.png",
            "question": "Niedotlenienie organizmu podczas wykonywania lotu:",
            "answers": [
                "może wystąpić na skutek przebywania na dużej wysokości",
                "może spowodować zaburzenia pracy błędnika",
                "ma wpływ na bezpieczeństwo wykonywania lotu",
                "wszystkie odpowiedzi są prawidłowe"
            ],
            "correctAnswer": 3,
            "additionalLink": "http://www.example.com"
        },
        {
            "image": "media.png",
            "question": "Pilot wykonujący lot na paralotni powinien:",
            "answers": [
                "dopasować swój ubiór do warunków atmosferycznych",
                "zabezpieczyć się przed nadmierną utratą ciepła",
                "korzystać z nieprzewiewnego kombinezonu",
                "wszystkie odpowiedzi są prawidłowe"
            ],
            "correctAnswer": 3,
            "additionalLink": "http://www.example.com"
        },
        {
            "image": "media.png",
            "question": "Chwilowe osłabienie słuchu może być skutkiem:",
            "answers": [
                "nagłej zmiany ciśnienia",
                "nagłej zmiany prędkości",
                "zmiany temperatury",
                "wszystkie odpowiedzi są prawidłowe"
            ],
            "correctAnswer": 0,
            "additionalLink": "http://www.example.com"
        },
        {
            "image": "media.png",
            "question": "W normalnym stanie atmosfery temperatura powietrza:",
            "answers": [
                "rośnie, co może doprowadzić do przegrzania organizmu",
                "nie zmienia się",
                "maleje od 0,6 do 1 stopnia na każde 100m",
                "początkowo rośnie, poźniej maleje"
            ],
            "correctAnswer": 2,
            "additionalLink": "http://www.example.com"
        },
        {
            "image": "media.png",
            "question": "Prędkość wiatru i jego kierunek:",
            "answers": [
                "nie ma wpływu na bezpieczeństwo lotu",
                "podczas startu nie ma znaczenia",
                "nie ma wpływu na tworzenie się turbulencji i rotorów",
                "wszystkie odpowiedzi są fałszywe"
            ],
            "correctAnswer": 3,
            "additionalLink": "http://www.example.com"
        },
        {
            "image": "media.png",
            "question": "Spożywanie alkoholu przed lub w trakcie lotu:",
            "answers": [
                "jest łamaniem prawa lotniczego",
                "powoduje pogorszenie koncentracji",
                "niekorzystnie wpływa na narząd równowagi",
                "wszystkie odpowiedzi są prawidłowe"
            ],
            "correctAnswer": 3,
            "additionalLink": "http://www.example.com"
        },
        {
            "image": "media.png",
            "question": "Najczęstszą przyczyną urazu kręgosłupa jest:",
            "answers": [
                "wykonywanie lotów z napędem plecakowym",
                "latanie w kominach termicznych",
                "\\"przeciągnięcie\\" paralotni podczas podejścia do lądowania",
                "lądowanie z założonymi \\"uszami\\""
            ],
            "correctAnswer": 2,
            "additionalLink": "http://www.example.com"
        },
        {
            "image": "media.png",
            "question": "Start na paralotni może być niebezpieczny gdy:",
            "answers": [
                "występuje silny porwist wiatr",
                "przez startowisko przechodzą podmuchy termiczne",
                "startowisko jest po stronie zawietrznej góry",
                "wszystkie odpowiedzi są prawidłowe"
            ],
            "correctAnswer": 3,
            "additionalLink": "http://www.example.com"
        },
        {
            "image": "media.png",
            "question": "Udzielając pomocy pilotowi, który spadł na ziemię i doznał urazu:",
            "answers": [
                "jeżeli jest taka potrzeba staramy się przywrócić akcję serca i oddech",
                "tamujemy miejsca krwotoku",
                "wzywamy służby medyczne",
                "wszystkie odpowiedzi są prawidłowe"
            ],
            "correctAnswer": 3,
            "additionalLink": "http://www.example.com"
        }
    ]
                },
                {
                    "image": "/meteo.png",
                    "title": "Meteo",
                    "score": 0,
                    "questions": [
        {
            "image": "media.png",
            "question": "Front atmosferyczny jest to:",
            "answers": [
                "linia rozdziału dwóch mas powietrza o różnej temperaturze",
                "linia łącząca punkty o stałym ciśnieniu",
                "obszar występowania powietrza o obniżonym ciśnieniu",
                "masa powietrza przemieszczająca się od wyżu do niżu"
            ],
            "correctAnswer": 0,
            "additionalLink": "http://www.example.com"
        },
        {
            "image": "media.png",
            "question": "Po przejściu frontu cieplnego następuje:",
            "answers": [
                "poprawa pogody, zanikają opady, zwiększa się nasłonecznienie",
                "pogorszenie pogody, mogą pojawić się opady z nimbostratusa",
                "nasilenie opadów z cumulonimbusa",
                "gwałtowne ochłodzenie"
            ],
            "correctAnswer": 1,
            "additionalLink": "http://www.example.com"
        },
        {
            "image": "media.png",
            "question": "Obszar wyżowy to:",
            "answers": [
                "obszar występowania powietrza, którego temperatura jest stała na każdej wysokości",
                "miejsce występowania powietrza o podwyższonym ciśnieniu",
                "miejsce występowania powietrza o obniżonym ciśnieniu",
                "obszar powietrza powyżej 1500 m npm"
            ],
            "correctAnswer": 1,
            "additionalLink": "http://www.example.com"
        },
        {
            "image": "media.png",
            "question": "Izobara jest to:",
            "answers": [
                "linia na mapie pogody łącząca punkty o tym samym ciśnieniu",
                "zapis zmiany ciśnienia na osi czasowej",
                "obszar występowania powietrza o jednakowym ciśnieniu",
                "przyrząd do pomiaru ciśnienia atmosferycznego"
            ],
            "correctAnswer": 0,
            "additionalLink": "http://www.example.com"
        },
        {
            "image": "media.png",
            "question": "Okluzja występuje gdy:",
            "answers": [
                "nastąpi wyrównanie ciśnienia pomiędzy wyżem a niżem",
                "powietrze o wyższej temperaturze napłynie na obszar chłodniejszego powietrza",
                "front chłodny dogoni front ciepły",
                "powietrze chłodne znajdzie się niżej od ciepłego"
            ],
            "correctAnswer": 2,
            "additionalLink": "http://www.example.com"
        },
        {
            "image": "media.png",
            "question": "Chmura cb:",
            "answers": [
                "powoduje gwałtowny opad",
                "towarzyszą jej silne prądy powietrzne",
                "jest dużym zagrożeniem dla pilota paralotniowego",
                "wszystkie odpowiedzi są prawidłowe"
            ],
            "correctAnswer": 3,
            "additionalLink": "http://www.example.com"
        },
        {
            "image": "media.png",
            "question": "Chmura nimbostratus:",
            "answers": [
                "jest chmurą najniższego piętra",
                "zbudowana jest z wody i pary wodnej",
                "powoduje jednostajny opad deszczu",
                "wszystkie odpowiedzi są prawidłowe"
            ],
            "correctAnswer": 3,
            "additionalLink": "http://www.example.com"
        },
        {
            "image": "media.png",
            "question": "Chmura altus:",
            "answers": [
                "sygnalizuje gwałtowne pogorszenie pogody",
                "nie występuje w naszej strefie klimatycznej",
                "zbudowana jest wyłącznie z pary wodnej",
                "jest chmurą średniego pietra"
            ],
            "correctAnswer": 3,
            "additionalLink": "http://www.example.com"
        },
        {
            "image": "media.png",
            "question": "Chmura cirrus:",
            "answers": [
                "zbudowana jest z kryształków lodu",
                "jest chmurą średniego piętra",
                "łatwo przeobraża się w chmurę burzową",
                "występuje głównie zimą"
            ],
            "correctAnswer": 0,
            "additionalLink": "http://www.example.com"
        },
        {
            "image": "media.png",
            "question": "Inwersja to:",
            "answers": [
                "zjawisko wyrównania ciśnienia pomiędzy sąsiadującymi dolinami",
                "zjawisko pogodowe, w którym powietrze o wyższej temperaturze znajduje się wyżej",
                "efekt przepływu powietrza przez dyszę",
                "forma rotoru"
            ],
            "correctAnswer": 1,
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
