import React from 'react';
import { GameDescription } from '../../models/gameModel';
import './styles.scss';

const CardGameDescription: React.FC<GameDescription> = ({ description }) => {
    return (
        <div className="gameDescription">
            <p>{description}</p>
        </div>
    );
};

export default CardGameDescription;
