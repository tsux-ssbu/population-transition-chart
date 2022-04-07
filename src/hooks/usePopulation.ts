import { useCallback, useState } from 'react';

import { PopulationType } from 'src/types/population';
import { PrefectureType } from 'src/types/prefecture';
import { PopulationDatasetsType } from 'src/types/chart';
import { apiClient } from 'src/utils/fetcher';
import { getRandomColor } from 'src/utils/getRandomColor';

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
    } catch (error: any) {
      throw new Error(error.message);
    }
  }, []);

  const updatePopulationData = useCallback(
    async (pref: PrefectureType) => {
      try {
        const populationData = await fetchPopulation(pref);
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
      } catch (error: any) {
        throw new Error(error.message);
      }
    },
    [fetchPopulation, graphLabel],
  );

  return { updatePopulationData, populationGraphData, graphLabel };
};
