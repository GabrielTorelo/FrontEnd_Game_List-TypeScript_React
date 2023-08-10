import { GameMinModel, GameCollectionModel } from "./gameModel";

export type GameListModel = {
    id: number,
    name: string
};

export type GameListIDModel = {
    id: number
};

export type GameListAllModel = {
    lists: GameListCollectionModel,
    games: GameCollectionModel[]

};

export type GameListAndGamesModel = {
    list: GameListModel,
    games: GameMinModel[]
}

export type GameListCollectionModel = GameListModel[];
