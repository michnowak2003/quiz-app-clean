import React from 'react';
import PropTypes from 'prop-types';
import './Card.scss';
import Button from "../Button/Button";
import {Link} from "react-router-dom";

const Card = ({ image, title, subtitle, buttonText, completedText, linkTo }) => {
    return (
        <div className="card-container">
            <div className="card-container__image-wrapper">
                <img src={image} alt="Zdjęcie" className="card-container__image-wrapper__image" />
                {completedText && (
                    <div className="card-container__image-wrapper__completed-text">{completedText}</div>
                )}
            </div>
            <div className="card-container__content">
                <h2 className="card-container__content__title">{title}</h2>
                <p className="card-container__content__subtitle">{subtitle}</p>
                <Link to={linkTo}>
                    <Button type={'primary'}>{buttonText}</Button>
                </Link>

            </div>
        </div>
    );
};

Card.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
    completedText: PropTypes.string,
};

export default Card;
