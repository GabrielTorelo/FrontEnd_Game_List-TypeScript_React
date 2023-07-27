import React from 'react';
import { StarRatingModel } from '../../../domain/models/gameModel';
import './styles.scss';

const StarRating: React.FC<StarRatingModel> = ({ score }) => {
    let wholeStars = "★".repeat(Math.round(score));
    let halfStars = "☆".repeat(5 - Math.round(score));

    return (
        <div className="starRating">
            <h3>{wholeStars + halfStars}</h3>
        </div>
    );
};

export default StarRating;
