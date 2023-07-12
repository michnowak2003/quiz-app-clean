import React, {useContext, useState} from 'react';
import './Question.scss';
import {StateContext} from "../../stateContext";

const Question = ({ question, answers, correctAnswer, chapterIndex, questionIndex }) => {
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    let state = useContext(StateContext);
    const handleAnswerSelection = (index) => {
        setSelectedAnswer(index);
        //TODO refactor this
        state.chapters[chapterIndex].questions[questionIndex] = {...state.chapters[chapterIndex].questions[questionIndex], selectedAnswer: index, isSelectedAnswerCorrect: selectedAnswer == state.chapters[chapterIndex].questions[questionIndex].correctAnswer};
    };

    const isAnswerCorrect = (index) => {
        //return selectedAnswer === index && selectedAnswer === correctAnswer;
    };

    const isAnswerIncorrect = (index) => {
        //return selectedAnswer === index && selectedAnswer !== correctAnswer;
    };

    return (
        <div className="question-container">
            <h3 className="question-container__question">{question}</h3>
            <ul className="question-container__answers">
                {answers.map((answer, index) => (
                    <li
                        key={index}
                        className={`question-container__answer ${selectedAnswer === index ? 'selected' : ''} ${isAnswerCorrect(index) ? 'correct' : ''} ${isAnswerIncorrect(index) ? 'incorrect' : ''}`}
                        onClick={() => handleAnswerSelection(index)}
                    >
                        <input
                            type="radio"
                            name="answer"
                            checked={selectedAnswer === index}
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
