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
        <Summary points={10} maxPoints={state.chapters[chapterId].questions.length}/>
        <div className={'quiz-page__buttons'}>
            <Button type={'secondary'} onClick={() => handleButtonClick('back')}> Cofnij</Button>
            <Button type={'primary'} onClick={() => handleButtonClick('tryAgain')}>Powtórz quiz</Button>
        </div>
    </div>
  );
}

export default SummaryPage;
