import './SummaryPage.scss';
import { StateContext } from '../../stateContext';
import React, {useContext, useEffect, useRef} from "react";
import {useParams, useNavigate} from "react-router-dom";
import Button from "../../Components/Button/Button";
import Summary from "../../Components/Summary";
import Navbar from "../../Components/Navbar/Navbar";
import { showAnswers, resetAnswers, validatePoints } from "../../utils/answerUtils";
function SummaryPage() {
    const navigate = useNavigate();
    let { chapterId } = useParams();
    let state = useContext(StateContext);



    const handleButtonClick = (type) => {
        switch (type) {
            case 'checkAnswers':
               navigate(`/quiz-page/${chapterId}/0`)
                showAnswers(state, chapterId)
                break;

            case 'tryAgain':
                navigate(`/quiz-page/${chapterId}/0`)
                resetAnswers(state, chapterId)
        }
    };
  return (
    <div className="summary-page">
        <Navbar>
        </Navbar>
        <Summary points={validatePoints(state, chapterId)} maxPoints={state.chapters[chapterId].questions.length}/>
        <div className={'summary-page__buttons'}>
            <Button type={'primary'} onClick={() => handleButtonClick('checkAnswers')}><span>Sprawdź odpowiedzi</span></Button>
            <Button type={'secondary'} className={'summary-page__buttons--margin-top'} onClick={() => handleButtonClick('tryAgain')}><span>Powtórz Quiz</span></Button>
        </div>
    </div>
  );
}

export default SummaryPage;
