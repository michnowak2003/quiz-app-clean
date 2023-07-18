import './App.scss';
import Card from "../../Components/Card";
import {useContext} from "react";
import { StateContext } from '../../stateContext';

function App() {
    let state = useContext(StateContext);

    const checkIsCompleted = (questions) => {
        let answeredQuestion = 0;
        let correctAnswers = 0;
        const maxAnsweredQuestion = questions.length;
        questions.forEach((question) => {
            if(question.selectedAnswer) {
                if(question.selectedAnswer === question.correctAnswer) {
                    correctAnswers++
                }
                answeredQuestion++
            }
        })
        if(correctAnswers === maxAnsweredQuestion) {
            return 'Ukończone';
        } else if (answeredQuestion) {
            return 'Do poprawy'
        } else {
            return null
        }
    };
  return (
    <div className="App">
            <div>
                <nav>
                        {state.chapters?.map((chapter, index) => (
                                <Card
                                    image={chapter.image}
                                    buttonText={'Rozpocznij'}
                                    linkTo={`/quiz-page/${index}/0`}
                                    subtitle={`Rozdział ${index+1}`}
                                    title={chapter.title}
                                    completedText={checkIsCompleted(chapter.questions)}
                                    key={index}
                                />
                        ))}
                </nav>
            </div>

    </div>
  );
}

export default App;
