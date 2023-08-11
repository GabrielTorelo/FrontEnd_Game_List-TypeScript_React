import { IHttpClient, HttpStatusCode } from '../protocols/http/httpClient';
import { IGetGamesOfList } from '../../domain/usecases/gameList/getGameLists';
import { AccessDeniedError, UnexpectedError } from '../../domain/errors';
import { GameCollectionModel } from '../../domain/models/gameModel';

export class RemoteGetGamesOfList implements IGetGamesOfList {
    constructor(
        private readonly url: string,
        private readonly httpClient: IHttpClient<GameCollectionModel>
    ) { };

    async get(): Promise<GameCollectionModel> {
        const httpResponse = await this.httpClient.request({
            url: this.url,
            method: 'get'
        });

        switch (httpResponse.statusCode) {
            case HttpStatusCode.ok:
                return httpResponse.body!;
            case HttpStatusCode.unauthorized:
                throw new AccessDeniedError();
            default:
                throw new UnexpectedError();
        }
    }
};
