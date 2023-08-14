export type GameModel = {
    id: number,
    title: string,
    score: number,
    imgUrl: string
}

export type GameMinModel = GameModel & {
    position: number,
    isDesc?: boolean,
};

export type GameShortModel = GameModel & {
    shortDescription: string
};

export type GameWrapperModel = {
    game: GameShortModel
};

export type StarRatingModel = {
    score: number
    isDesc?: boolean,
}

export type GameCollectionModel = GameMinModel[];
