import './QuizPage.scss';
import Question from "../../Components/Question";
import { StateContext } from '../../stateContext';
import React, {useContext, useEffect, useState} from "react";
import {useParams, useNavigate} from "react-router-dom";
import Button from "../../Components/Button/Button";
import ProgressBar from "../../Components/ProgressBar/ProgressBar";
import Navbar from "../../Components/Navbar/Navbar";

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
    },[questionNumberParams])

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
                break;
                default:
                    break;

        }
    };
  return (
      <div className="desktop-container">
    <div className="quiz-page">
        <Navbar>
            <ProgressBar currentValue={questionNumber + 1} maxValue={chapter.questions.length}/>
        </Navbar>
        <div className={'quiz-page__content'}>

        <Question
            chapterIndex={chapterId}
            questionIndex={questionNumber}
        />
        <div className={'quiz-page__buttons'}>
            <Button type={'secondary'} onClick={() => handleButtonClick('back')}><span>Cofnij</span></Button>
            <Button type={'primary'} onClick={() => handleButtonClick('next')}><span>Dalej</span></Button>
        </div>
        </div>
    </div>
      </div>
  );
}

export default QuizPage;
