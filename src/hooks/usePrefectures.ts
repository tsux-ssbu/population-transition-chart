import useSWRImmutable from 'swr/immutable';

import { fetcher } from 'src/utils/fetcher';
import { PrefectureType } from 'src/types/prefecture';

export const usePrefectures = () => {
  const { data, error } = useSWRImmutable<PrefectureType[]>('/api/v1/prefectures', fetcher);
  return {
    prefectures: data,
    isLoading: !error && !data,
    isError: error,
  };
};
