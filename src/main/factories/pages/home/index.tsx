import React from 'react';
import getGameLists from '../../hooks/getGameLists';
import { Home } from "../../../../presentation/pages";

const MakeHome: React.FC = () => {
    const { loading, lists, games } = getGameLists();

    return (
        (loading
            ? <div className="loading" />
            : lists?.[0] != undefined && games?.[0] != undefined
                ? <Home lists={lists} games={games} />
                : <h2>Não possui Listas de Jogos</h2>
        )
    );
};

export default MakeHome;
