import React from 'react';
import { Link } from 'react-router-dom';
import { GameMinModel } from '../../../domain/models/gameModel';
import StarRating from '../StarRating';
import './styles.scss';

const CardGame: React.FC<GameMinModel> = ({ id, title, score, imgUrl, isDesc }) => {
    return (
        <Link to={`/games/${id}`} className={`cardGame ${isDesc && 'description'}`}>
            <div className="picture" style={{backgroundImage: `url(${imgUrl})`}}/>
            <h3>{title}</h3>
            <StarRating score={score} isDesc={isDesc}/>
        </Link>
    );
};

export default CardGame;
