import { useEffect, useState } from 'react';
import { makeRemoteGetGame } from '../usecases/makeRemoteGetGame';
import { GameShortModel } from '../../../domain/models/gameModel';
import { UnexpectedError } from '../../../domain/errors';
import { useParams } from 'react-router-dom';

const getGameShort = () => {
    const params = useParams();
    const id = params?.id ? Number(params?.id) : 1

    const [loading, setLoading] = useState<boolean>(true);
    const [game, setGame] = useState<GameShortModel>();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const gamesData = await makeRemoteGetGame({ id: id }).get();
                setGame(gamesData);
                setLoading(false);
            } catch (error) {
                throw new UnexpectedError(error as string);
            }
        };

        fetchData();
    }, []);

    return { loading, game };
};

export default getGameShort;
