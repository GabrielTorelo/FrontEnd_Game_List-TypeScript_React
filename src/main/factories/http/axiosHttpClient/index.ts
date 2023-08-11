import { AxiosHttpClient } from '../../../../infra/http/axiosHttpClient';

export const makeAxiosHttpClient = (): AxiosHttpClient => {
  return new AxiosHttpClient();
};
