import type { NextPage } from 'next';

import { CheckBoxList } from 'src/components/CheckboxList';
import { Header } from 'src/components/Header';
import { PopulationChart } from 'src/components/PopulationChart';
import { usePopulation } from 'src/hooks/usePopulation';

const Home: NextPage = () => {
  const { updatePopulationData, populationGraphData, graphLabel } = usePopulation();

  return (
    <div>
      <Header />
      <CheckBoxList updatePopulationData={updatePopulationData} />
      <PopulationChart labels={graphLabel} datasets={populationGraphData} />
    </div>
  );
};

export default Home;
