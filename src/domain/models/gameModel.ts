export type GameModel = {
    id: number,
    title: string,
    score: number,
    imgUrl: string
}

export type GameMinModel = GameModel & {
    position: number
};

export type GameShortModel = GameModel & {
    shortDescription: string
};

export type StarRatingModel = {
    score: number
}

export type GameCollectionModel = GameMinModel[];