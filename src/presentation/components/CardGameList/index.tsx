import React from 'react';
import { GameListModel } from '../../../domain/models/gameListModel';
import useToggleState from '../../hooks/useToggleState';
import CardGame from '../CardGame';
import './styles.scss';

const CardGameList: React.FC<GameListModel> = ({ name }) => {
    const [expanded, handleOnChange] = useToggleState(false);

    return (
        <div className="gameList">
            <div className="gameListTop" onClick={handleOnChange}>
                <div className="arrowDown" />
                <h3>{name}</h3>
            </div>
            <div className="gameListBelow">
                {expanded
                    ? <>
                        <CardGame
                            id={1}
                            title="Street Fighter 6"
                            score={3.7}
                            imgUrl="https://image.api.playstation.com/vulcan/ap/rnd/202211/1407/XFU0aPBvtm3W2od1ZvhByAOv.png"
                            position={1} />
                        <div className="space" /></>
                    : <></>
                }

            </div>
        </div>
    );
};

export default CardGameList;
