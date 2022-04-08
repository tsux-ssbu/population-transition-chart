import axios from 'axios';

import { API_URL, API_KEY } from 'src/config';

const commonConfig = {
  baseURL: API_URL,
  headers: {
    'X-API-KEY': API_KEY,
  },
};

export const apiClient = axios.create(commonConfig);

export const fetcher = async (url: string): Promise<any> => {
  const res = await apiClient.get(url);
  return res.data;
};
