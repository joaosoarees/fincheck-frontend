import { httpClient } from '../httpClient';

export interface ISignInParams {
  email: string;
  password: string;
}

interface ISignInResponse {
  accessToken: string;
}

export async function signin(params: ISignInParams) {
  const { data } = await httpClient.post<ISignInResponse>(
    '/auth/signin',
    params,
  );

  return data;
}
