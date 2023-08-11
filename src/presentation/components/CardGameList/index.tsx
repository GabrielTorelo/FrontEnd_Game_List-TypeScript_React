import React from 'react';
import { GameListAndGamesModel } from '../../../domain/models/gameListModel';
import useToggleState from '../../hooks/useToggleState';
import CardGame from '../CardGame';
import './styles.scss';

const CardGameList: React.FC<GameListAndGamesModel> = ({ list, games }) => {
    const [expanded, handleOnChange] = useToggleState(false);

    return (
        <div className="gameList">
            <div className="gameListTop" onClick={handleOnChange}>
                <div className="arrowDown" />
                <h3>{list.name}</h3>
            </div>
            <div className="gameListBelow">
                {expanded
                    ? <>
                        {games.map((game) => (
                            <CardGame
                                key={game.id}
                                id={game.id}
                                title={game.title}
                                score={game.score}
                                imgUrl={game.imgUrl}
                                position={game.position} />
                        ))}
                        <div className="space" /></>
                    : <></>
                }
            </div>
        </div>
    );
};

export default CardGameList;
