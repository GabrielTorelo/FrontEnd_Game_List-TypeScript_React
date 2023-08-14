import { IHttpClient, HttpStatusCode } from '../../protocols/http/httpClient';
import { IGetGameShort } from '../../../domain/usecases/game/getGame';
import { AccessDeniedError, UnexpectedError } from '../../../domain/errors';
import { GameShortModel } from '../../../domain/models/gameModel';

export class RemoteGetGameShort implements IGetGameShort {
    constructor(
        private readonly url: string,
        private readonly httpClient: IHttpClient<GameShortModel>
    ) { };

    async get(): Promise<GameShortModel> {
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
