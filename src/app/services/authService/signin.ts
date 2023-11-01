import { sleep } from "../../utils/sleep";
import { httpClient } from "../httpClient";

export interface SignInParams {
  email: string;
  password: string;
}

interface SignInResponse {
  accessToken: string;
}

export async function signin(params: SignInParams) {
  await sleep(1500);
  const { data } = await httpClient.post<SignInResponse>('/auth/signin', params);

  return data;
}
