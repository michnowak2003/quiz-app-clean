import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import './Card.scss';
import Button from "../Button/Button";
import {Link} from "react-router-dom";
import {resetAnswers} from "../../utils/answerUtils";
import {StateContext} from "../../stateContext";

const Card = ({ chapter, subtitle, buttonText, completedText, linkTo, chapterId }) => {
    let state = useContext(StateContext);

    const {image, title } = chapter;
    return (
        <div className="card-container">
            <div className="card-container__image-wrapper">
                {image ?  <img src={image} alt="Zdjęcie" className="card-container__image-wrapper__image" /> :
                <div className="card-container__image-wrapper__image-placeholder"></div>
                }
                {completedText && (
                    <div className={`card-container__image-wrapper__completed-text ${completedText !=='Ukończone' ? 'card-container__image-wrapper__completed-text--warning': ''}`}>{completedText}</div>
                )}
            </div>
            <div className="card-container__content">
                <h2 className="card-container__content__title">{title}</h2>
                <p className="card-container__content__subtitle">{subtitle}</p>
                <Link to={linkTo} onClick={()=> resetAnswers(state, chapterId)}>
                    <Button type={'primary'} className={"card-container__button"}><span>{buttonText}</span></Button>
                </Link>

            </div>
        </div>
    );
};

Card.propTypes = {
    subtitle: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
    completedText: PropTypes.string,
};

export default Card;
