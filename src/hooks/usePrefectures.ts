import useSWRImmutable from 'swr/immutable';

import { fetcher } from 'src/utils/fetcher';
import { PrefectureType } from 'src/types/prefecture';

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
