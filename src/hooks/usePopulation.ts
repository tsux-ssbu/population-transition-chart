import { useCallback } from 'react';
import { PopulationType } from 'src/types/population';

import { apiClient } from 'src/utils/fetcher';

const POPUlATION_URL = '/api/v1/population/composition/perYear';

type Response = {
  message: null;
  result: PopulationType;
};

export const usePopulation = () => {
  const fetchPopulationByPrefCode = useCallback(async (prefCode: string) => {
    try {
      const res = await apiClient.get<Response>(`${POPUlATION_URL}?prefCode=${prefCode}`);
      console.log(res.data);
    } catch (error: any) {
      throw new Error(error.message);
    }
  }, []);
  return { fetchPopulationByPrefCode };
};
