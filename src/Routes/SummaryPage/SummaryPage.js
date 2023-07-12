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


    const handleButtonClick = (type) => {
        switch (type) {
            case 'back':
               navigate(`/quiz-page/${chapterId}/${state.chapters[chapterId].questions.length-1}`)
                break;

            case 'tryAgain':
                navigate(`/quiz-page/${chapterId}/0`)
        }
    };
  return (
    <div className="quiz-page">
        <Summary points={validatePoints()} maxPoints={state.chapters[chapterId].questions.length}/>
        <div className={'quiz-page__buttons'}>
            <Button type={'secondary'} onClick={() => handleButtonClick('back')}><span>Cofnij</span></Button>
            <Button type={'primary'} onClick={() => handleButtonClick('tryAgain')}><span>Powtórz quiz</span></Button>
        </div>
    </div>
  );
}

export default SummaryPage;
