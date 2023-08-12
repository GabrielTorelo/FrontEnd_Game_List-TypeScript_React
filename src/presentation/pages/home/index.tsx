import React from "react";
import CardGameList from "../../components/CardGameList";
import { GameListAllModel } from "../../../domain/models/gameListModel";
import './styles.scss';

const Home: React.FC<GameListAllModel> = ({ lists, games }) => {
    return (
        <div className="lists">
            {lists.map((list) => (
                <CardGameList key={list.id} list={list} games={games[list.id - 1]} />
            ))}
        </div>
    );
};

export default Home;
