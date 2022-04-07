import { API_URL, API_KEY } from 'src/config';

export const fetcher = async (url: string): Promise<any> => {
  const requestHeaders: HeadersInit = new Headers();
  requestHeaders.set('X-API-KEY', API_KEY);

  const response = await fetch(`${API_URL}${url}`, {
    headers: requestHeaders,
  });
  if (!response.ok) {
    throw new Error('エラーが発生したため、データの取得に失敗');
  }
  const json = await response.json();
  return json.result;
};
