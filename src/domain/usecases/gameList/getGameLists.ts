import { GameListCollectionModel } from '../../models/gameListModel';
import { GameCollectionModel } from '../../models/gameModel';

export interface IGetGameLists {
  get: () => Promise<GameListCollectionModel>;
}

export interface IGetGamesOfList {
  get: () => Promise<GameCollectionModel>;
}
