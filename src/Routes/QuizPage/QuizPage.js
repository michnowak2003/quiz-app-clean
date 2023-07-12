import './QuizPage.scss';
import Question from "../../Components/Question";
import { StateContext } from '../../stateContext';
import React, {useContext, useEffect, useState} from "react";
import {useParams, useNavigate} from "react-router-dom";
import Button from "../../Components/Button/Button";
import ProgressBar from "../../Components/ProgressBar/ProgressBar";

function QuizPage() {
    const navigate = useNavigate();

    const [questionNumber, setQuestionNumber] = useState(0);
    const { chapters } = useContext(StateContext);
    let { chapterId, questionNumberParams } = useParams();
    const chapter = chapters[chapterId];

    useEffect(() => {
        if(questionNumberParams) {
            setQuestionNumber(parseInt(questionNumberParams));
        }
    },[])

    const handleButtonClick = (type) => {
        switch (type) {
            case 'back':
                if (questionNumber > 0) {
                    setQuestionNumber(prev => prev - 1);
                    navigate(`/quiz-page/${chapterId}/${questionNumber -1}`)
        } else {
                    navigate('/')
                }
                break;

            case 'next':
                if (questionNumber < chapter.questions.length - 1) {
                    setQuestionNumber(prev => prev + 1);
                    navigate(`/quiz-page/${chapterId}/${questionNumber + 1}`)
        } else {
    navigate('/summary-page/' + chapterId)
                }
        }
    };
  return (
    <div className="quiz-page">
        <ProgressBar currentValue={questionNumber + 1} maxValue={chapter.questions.length}/>
        <Question
            chapterIndex={chapterId}
            questionIndex={questionNumber}
        />
        <div className={'quiz-page__buttons'}>
            <Button type={'secondary'} onClick={() => handleButtonClick('back')}><span>Cofnij</span></Button>
            <Button type={'primary'} onClick={() => handleButtonClick('next')}><span>Dalej</span></Button>
        </div>
    </div>
  );
}

export default QuizPage;
