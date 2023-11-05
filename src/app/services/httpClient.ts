import axios from 'axios';

import { localStorageKeys } from '../config/localStorageKeys';
import { sleep } from '../utils/sleep';

export const httpClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

httpClient.interceptors.request.use((config) => {
  const configs = { ...config };

  const storedAccessToken = localStorage.getItem(localStorageKeys.ACCESS_TOKEN);

  if (storedAccessToken) {
    configs.headers.Authorization = `Bearer ${storedAccessToken}`;
  }

  return configs;
});

httpClient.interceptors.response.use(async (data) => {
  await sleep(500);
  return data;
});
