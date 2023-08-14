import { RemoteGetGameLists } from '../../../data/usecases/gameList/remoteGetGameLists';
import { RemoteGetGamesOfList } from '../../../data/usecases/gameList/remoteGetGamesOfList';
import { GameListIDModel } from '../../../domain/models/gameListModel';
import { IGetGameLists, IGetGamesOfList } from '../../../domain/usecases/gameList/getGameLists';
import { makeAxiosHttpClient, makeApiUrl } from '../http';

export const makeRemoteGetGameLists = (): IGetGameLists => {
    const remoteGetGameLists = new RemoteGetGameLists(
        makeApiUrl('/lists'),
        makeAxiosHttpClient()
    );

    return remoteGetGameLists;
};

export const makeRemoteGetGamesOfList = ({ id }: GameListIDModel): IGetGamesOfList => {
    const remoteGetGamesOfList = new RemoteGetGamesOfList(
        makeApiUrl(`/lists/${id}/games`),
        makeAxiosHttpClient()
    );

    return remoteGetGamesOfList;
};
