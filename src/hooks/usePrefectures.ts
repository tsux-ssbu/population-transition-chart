import useSWRImmutable from 'swr/immutable';

import { PrefectureType } from '../types/prefecture';
import { fetcher } from '../utils/fetcher';

type Response = {
  message: null;
  result: PrefectureType[];
};

export const usePrefectures = () => {
  const { data, error } = useSWRImmutable<Response>('/api/v1/prefectures', fetcher);
  return {
    prefectures: data?.result,
    isLoading: !error && !data,
    isError: error,
  };
};
