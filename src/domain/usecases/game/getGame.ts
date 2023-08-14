import { GameShortModel } from '../../models/gameModel';

export interface IGetGameShort {
  get: () => Promise<GameShortModel>;
}

