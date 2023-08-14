import { RemoteGetGameShort } from '../../../data/usecases/game/remoteGetGameShort';
import { GameListIDModel } from '../../../domain/models/gameListModel';
import { IGetGameShort } from '../../../domain/usecases/game/getGame';
import { makeAxiosHttpClient, makeApiUrl } from '../http';

export const makeRemoteGetGame = ({ id }: GameListIDModel): IGetGameShort => {
    const remoteGetGame = new RemoteGetGameShort(
        makeApiUrl(`/games/${id}`),
        makeAxiosHttpClient()
    );

    return remoteGetGame;
};
