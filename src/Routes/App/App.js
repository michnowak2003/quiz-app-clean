import './App.scss';
import Card from "../../Components/Card";
import {useContext} from "react";
import { StateContext } from '../../stateContext';

function App() {
    let state = useContext(StateContext);
    const localScores = JSON.parse(localStorage.getItem("scores"));

    const checkIsCompleted = (questions, chapterId) => {
        const maxAnsweredQuestion = questions.length;
        if(localScores) {
            const chapterScore = localScores.find((chapter) => {
                return parseInt(chapter.id) === chapterId;
            });
            if (chapterScore) {
                if (chapterScore.correctAnswers === maxAnsweredQuestion) {
                    return 'Ukończone';
                } else if (chapterScore.answeredQuestion) {
                    return 'Do poprawy'
                } else {
                    return null
                }
            }
        }
    };
  return (
    <div className="App">
            <div>
                <nav>
                        {state.chapters?.map((chapter, index) => (
                                <Card
                                    chapter={chapter}
                                    buttonText={'Rozpocznij'}
                                    linkTo={`/quiz-page/${index}/0`}
                                    subtitle={`Rozdział ${index+1}`}
                                    completedText={checkIsCompleted(chapter.questions, index)}
                                    key={index}
                                    chapterId={index}
                                />
                        ))}
                </nav>
            </div>

    </div>
  );
}

export default App;
