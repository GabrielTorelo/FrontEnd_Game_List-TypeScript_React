import React from 'react';
import getGameShort from '../../hooks/getGameShort';
import { Games } from "../../../../presentation/pages";

const MakeGames: React.FC = () => {
    const { loading, game } = getGameShort();

    return (
        (loading
            ? <div className="loading" />
            : game != undefined
                ? <Games game={game} />
                : <h2>Jogo não Encontrado</h2>
        )
    );
};

export default MakeGames;
