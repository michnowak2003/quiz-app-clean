import React, {useEffect, useState} from 'react';
import './Summary.scss';
import image1 from './../../image1.png';
import image2 from './../../image2.png';
import image3 from './../../image3.png';

const Summary = ({ points, maxPoints }) => {
    const [imageSrc, setImageSrc] = useState('');
    const [title, setTitle] = useState('');

    useEffect(() => {
        if (points === 10) {
            setImageSrc(image1);
            setTitle('Gratulacje!');
        } else if (points >= 8) {
            setImageSrc(image2);
            setTitle('Dobrze!');
        } else {
            setImageSrc(image3);
            setTitle('Spróbuj ponownie!');
        }
    }, [points]);
    return (
        <div className="summary-container">
            <img src={imageSrc} alt="Obrazek" className="summary-container__image" />
            <h2 className="summary-container__title">{title}</h2>
            <p className="summary-container__info">
                Uzyskałeś <span className="summary-container__info__points">{points} na {maxPoints}</span> punktów!
            </p>
        </div>
    );
};

export default Summary;
