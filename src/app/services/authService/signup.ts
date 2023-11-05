import { httpClient } from '../httpClient';

export interface ISignUpParams {
  name: string;
  email: string;
  password: string;
}

interface ISignUpResponse {
  accessToken: string;
}

export async function signup(params: ISignUpParams) {
  const { data } = await httpClient.post<ISignUpResponse>(
    '/auth/signup',
    params,
  );

  return data;
}
