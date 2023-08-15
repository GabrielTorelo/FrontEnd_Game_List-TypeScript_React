import React from 'react';
import { Link } from 'react-router-dom';
import { GameShortModel } from '../../../domain/models/gameModel';
import { CardGame } from '../';
import CardGameDescription from '../CardGameDescription';
import './styles.scss';


const CardGameAbout: React.FC<GameShortModel> = ({ id, title, score, imgUrl, shortDescription }) => {
    return (
        <div className="gameAbout">
            <div className="gameAboutTop">
                <Link to={`/`}>
                    <div className="arrowBack" />
                </Link>
            </div>
            <div className="gameAboutBelow">
                <div className="gameCard">
                    <CardGame
                        id={id}
                        title={title}
                        score={score}
                        imgUrl={imgUrl}
                        position={0}
                        isDesc={true} />
                </div>
                <div className="gameDescButton">
                    <div className="gameDesc">
                        <CardGameDescription description={shortDescription} />
                    </div>
                    <Link to={`/games/${id}/more_about`} className="gameButton button">
                        <h2>SAIBA MAIS</h2>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CardGameAbout;
