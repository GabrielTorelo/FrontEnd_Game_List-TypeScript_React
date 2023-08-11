import axios, { AxiosResponse } from 'axios'
import { IHttpClient, HttpRequest, HttpResponse } from '../../data/protocols/http/httpClient'

export class AxiosHttpClient implements IHttpClient {
    async request(data: HttpRequest): Promise<HttpResponse> {
        let axiosResponse: AxiosResponse;

        try {
            axiosResponse = await axios.request({
                url: data.url,
                method: data.method,
                data: data.body,
                headers: data.headers
            });
        } catch (error: any) {
            axiosResponse = error.response;
        }

        return {
            statusCode: axiosResponse.status,
            body: axiosResponse.data
        }
    }
}
