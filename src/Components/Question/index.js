import React, {useContext, useEffect, useState} from 'react';
import './Question.scss';
import {StateContext} from "../../stateContext";

const Question = ({ chapterIndex, questionIndex }) => {
    let state = useContext(StateContext);
    let question = state.chapters[chapterIndex].questions[questionIndex];
    const [ selectedAnswer, setSelectedAnswer ] = useState(question.selectedAnswer);

    const correctAnswer = question.correctAnswer;

    const handleAnswerSelection = (index) => {
        setSelectedAnswer(index)
        question.selectedAnswer = index;
    };

    const isAnswerCorrect = (showAnswer,index) => {
        return showAnswer && index  === correctAnswer;
    };

    const isAnswerIncorrect = (showAnswer, index) => {
        return showAnswer && question.selectedAnswer === index && index!== correctAnswer;
    };

    return (
        <div className="question-container">
            <h3 className="question-container__question">{question.question}</h3>
            <ul className="question-container__answers">
                {question.answers.map((answer, index) => (
                    <li
                        key={index}
                        className={`question-container__answer ${question.selectedAnswer === index ? 'selected' : ''} ${isAnswerCorrect(question.showAnswer, index) ? 'correct' : ''} ${isAnswerIncorrect(question.showAnswer, index) ? 'incorrect' : ''}`}
                        onClick={() => !question.showAnswer && handleAnswerSelection(index)}
                    >
                        <input
                            type="radio"
                            name="answer"
                            checked={question.selectedAnswer === index}
                            readOnly
                            disabled={question.showAnswer}
                            onClick={() => !question.showAnswer && handleAnswerSelection(index)}
                        />
                        {answer}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Question;
