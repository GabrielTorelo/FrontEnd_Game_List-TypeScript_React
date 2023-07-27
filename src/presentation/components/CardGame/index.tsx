import React from 'react';
import { Link } from 'react-router-dom';
import { GameMinModel } from '../../../domain/models/gameModel';
import StarRating from '../StarRating';
import './styles.scss';

const CardGame: React.FC<GameMinModel> = ({ id, title, score, imgUrl }) => {
    return (
        <Link to={`/games/${id}`} className="cardGame">
            <div className="picture" style={{backgroundImage: `url(${imgUrl})`}}/>
            <h3>{title}</h3>
            <StarRating score={score}/>
        </Link>
    );
};

export default CardGame;
