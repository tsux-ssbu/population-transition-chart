import useSWR from 'swr';

import { fetcher } from 'src/utils/fetcher';
import { PrefectureType } from 'src/types/prefecture';

export const usePrefectures = () => {
  const { data, error } = useSWR<PrefectureType[]>('/api/v1/prefectures', fetcher);
  return {
    prefectures: data,
    isLoading: !error && !data,
    isError: error,
  };
};
