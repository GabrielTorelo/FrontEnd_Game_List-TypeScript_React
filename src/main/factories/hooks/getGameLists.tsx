import { useEffect, useState } from 'react';
import { makeRemoteGetGameLists, makeRemoteGetGamesOfList } from '../usecases/makeRemoteGetGameLists';
import { GameListCollectionModel } from '../../../domain/models/gameListModel';
import { GameCollectionModel } from '../../../domain/models/gameModel';
import { UnexpectedError } from '../../../domain/errors';

const getGameLists = () => {
    const remoteGetGameLists = makeRemoteGetGameLists();

    const [loading, setLoading] = useState<boolean>(true);
    const [lists, setLists] = useState<GameListCollectionModel>();
    const [games, setGames] = useState<GameCollectionModel[]>();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const listsData = await remoteGetGameLists.get();
                setLists(listsData);

                const gamePromises = listsData.map(async (list) => {
                    const resp = await makeRemoteGetGamesOfList({ id: list.id }).get();
                    return resp;
                });

                const gamesData = await Promise.all(gamePromises);
                setGames(gamesData);
                setLoading(false);
            } catch (error) {
                throw new UnexpectedError(error as string);
            }
        };

        fetchData();
    }, []);

    return { loading, lists, games };
};

export default getGameLists;
