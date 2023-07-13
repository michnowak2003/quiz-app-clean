import './SummaryPage.scss';
import { StateContext } from '../../stateContext';
import {useContext, useEffect, useRef} from "react";
import {useParams, useNavigate} from "react-router-dom";
import Button from "../../Components/Button/Button";
import Summary from "../../Components/Summary";

function SummaryPage() {
    const navigate = useNavigate();
    let { chapterId } = useParams();
    let state = useContext(StateContext);

    const validatePoints = () => {
        let score = 0;
        state.chapters[chapterId].questions.forEach(question => {
            if(question.selectedAnswer == question.correctAnswer) {
                score++;
            }
        })
        return score;
    }

    const resetAnswers = () => {
        state.chapters[chapterId].questions.forEach(question => {
            question.selectedAnswer = null;
            question.showAnswer = false;
        })
    }

    const showAnswers = () => {
        state.chapters[chapterId].questions.forEach(question => {
            question.showAnswer = true;
        })
    }


    const handleButtonClick = (type) => {
        switch (type) {
            case 'checkAnswers':
               navigate(`/quiz-page/${chapterId}/0`)
                showAnswers()
                break;

            case 'tryAgain':
                navigate(`/quiz-page/${chapterId}/0`)
                resetAnswers()
        }
    };
  return (
    <div className="quiz-page">
        <Summary points={validatePoints()} maxPoints={state.chapters[chapterId].questions.length}/>
        <div className={'summary-page__buttons'}>
            <Button type={'primary'} onClick={() => handleButtonClick('checkAnswers')}><span>Sprawdź odpowiedzi</span></Button>
            <Button type={'secondary'} className={'summary-page__buttons--margin-top'} onClick={() => handleButtonClick('tryAgain')}><span>Powtórz Quiz</span></Button>
        </div>
    </div>
  );
}

export default SummaryPage;
