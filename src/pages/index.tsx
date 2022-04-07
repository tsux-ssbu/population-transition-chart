import type { NextPage } from 'next';

import { CheckBoxList } from 'src/components/CheckboxList';
import { Header } from 'src/components/Header';
import { PopulationChart } from 'src/components/PopulationChart';
import { usePopulation } from 'src/hooks/usePopulation';
import styles from 'src/styles/Home.module.css';

const Home: NextPage = () => {
  const { updatePopulationData, deletePopulationData, populationGraphData, graphLabel } =
    usePopulation();

  return (
    <div>
      <Header />
      <div className={styles.main}>
        <CheckBoxList
          updatePopulationData={updatePopulationData}
          deletePopulationData={deletePopulationData}
        />
        <div className={styles.wrapper_chart}>
          <PopulationChart labels={graphLabel} datasets={populationGraphData} />
        </div>
      </div>
    </div>
  );
};

export default Home;
