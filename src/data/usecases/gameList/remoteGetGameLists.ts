import { IHttpClient, HttpStatusCode } from '../../protocols/http/httpClient';
import { IGetGameLists } from '../../../domain/usecases/gameList/getGameLists';
import { AccessDeniedError, UnexpectedError } from '../../../domain/errors';
import { GameListCollectionModel } from '../../../domain/models/gameListModel';

export class RemoteGetGameLists implements IGetGameLists {
    constructor(
        private readonly url: string,
        private readonly httpClient: IHttpClient<GameListCollectionModel>
    ) { };

    async get(): Promise<GameListCollectionModel> {
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
