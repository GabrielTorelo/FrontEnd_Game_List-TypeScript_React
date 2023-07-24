import React from 'react';
import './styles.scss';

type StarRatingProps = {
    score: number
}

const StarRating: React.FC<StarRatingProps> = ({ score }) => {
    let wholeStars = "★".repeat(Math.round(score));
    let halfStars = "☆".repeat(5 - Math.round(score));

    return (
        <div className="starRating">
            <h3>{wholeStars + halfStars}</h3>
        </div>
    );
};

export default StarRating;
