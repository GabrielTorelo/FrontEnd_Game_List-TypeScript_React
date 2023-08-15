import React from "react";
import CardGameAbout from "../../components/CardGameAbout";
import { GameWrapperModel } from "../../../domain/models/gameModel";
import './styles.scss'

const Games: React.FC<GameWrapperModel> = ({ game }) => {
    return (
        <div className="game">
            <CardGameAbout
                id={game.id}
                title={game.title}
                score={game.score}
                imgUrl={game.imgUrl}
                shortDescription={game.shortDescription} />
        </div>
    );
};

export default Games;
