import useSWR from 'swr';

import { fetcher } from 'src/utils/fetcher';
import { PrefectureType } from 'src/types/prefecture';

export const usePrefectures = () => {
  const { data, error } = useSWR<PrefectureType[]>('/api/v1/prefectures', fetcher);
  return {
    data,
    error,
    isLoading: !error && !data,
  };
};
