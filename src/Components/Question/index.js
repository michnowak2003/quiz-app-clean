import React, {useContext, useEffect, useState} from 'react';
import './Question.scss';
import {StateContext} from "../../stateContext";

const Question = ({ chapterIndex, questionIndex }) => {

    const [ selectedAnswer, setSelectedAnswer ] = useState(null);
    let state = useContext(StateContext);
    let question = state.chapters[chapterIndex].questions[questionIndex];

    const handleAnswerSelection = (index) => {
        setSelectedAnswer(index)
        question.selectedAnswer = index;
    };

    const isAnswerCorrect = (index) => {
        //return selectedAnswer === index && selectedAnswer === correctAnswer;
    };

    const isAnswerIncorrect = (index) => {
        //return selectedAnswer === index && selectedAnswer !== correctAnswer;
    };

    return (
        <div className="question-container">
            <h3 className="question-container__question">{question.question}</h3>
            <ul className="question-container__answers">
                {question.answers.map((answer, index) => (
                    <li
                        key={index}
                        className={`question-container__answer ${question.selectedAnswer === index ? 'selected' : ''} ${isAnswerCorrect(index) ? 'correct' : ''} ${isAnswerIncorrect(index) ? 'incorrect' : ''}`}
                        onClick={() => handleAnswerSelection(index)}
                    >
                        <input
                            type="radio"
                            name="answer"
                            checked={question.selectedAnswer === index}
                            readOnly
                        />
                        {answer}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Question;
