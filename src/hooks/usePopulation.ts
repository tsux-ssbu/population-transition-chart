import { useCallback, useState } from 'react';

import axios from 'axios';

import { PopulationType } from '../types/population';
import { PrefectureType } from '../types/prefecture';
import { PopulationDatasetsType } from '../types/chart';
import { apiClient } from '../utils/fetcher';
import { getRandomColor } from '../utils/getRandomColor';

const POPUlATION_URL = '/api/v1/population/composition/perYear';

type Response = {
  message: null;
  result: PopulationType;
};

export const usePopulation = () => {
  const [populationGraphData, setPopulationGraphData] = useState<PopulationDatasetsType[]>([]);
  const [graphLabel, setGraphLabel] = useState<number[]>([]);

  const fetchPopulation = useCallback(async (pref: PrefectureType) => {
    try {
      const res = await apiClient.get<Response>(`${POPUlATION_URL}?prefCode=${pref.prefCode}`);
      const populationData = res.data.result.data[0].data; // 総人口のデータ
      return populationData;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response && error.response.status) {
        throw new Error(error.message);
      }
    }
  }, []);

  const updatePopulationData = useCallback(
    async (pref: PrefectureType) => {
      try {
        const populationData = await fetchPopulation(pref);
        if (populationData === undefined) return;
        if (graphLabel.length === 0) {
          const label = populationData.map((item) => item.year);
          setGraphLabel(label);
        }
        const populationTransitionArray = populationData.map((item) => item.value);
        const borderColor = getRandomColor();
        setPopulationGraphData((prevData) => [
          ...prevData,
          { label: pref.prefName, data: populationTransitionArray, borderColor: borderColor },
        ]);
      } catch (error) {
        if (axios.isAxiosError(error) && error.response && error.response.status) {
          alert(error.message);
        }
      }
    },
    [fetchPopulation, graphLabel],
  );

  const deletePopulationData = useCallback((prefName: string) => {
    setPopulationGraphData((prevData) => prevData.filter((data) => data.label !== prefName));
  }, []);

  return { updatePopulationData, deletePopulationData, populationGraphData, graphLabel };
};
