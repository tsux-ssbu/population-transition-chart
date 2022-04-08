import type { NextPage } from 'next';

import { CheckBoxList } from '../components/CheckboxList';
import { Header } from '../components/Header';
import { PopulationChart } from '../components/PopulationChart';
import { usePopulation } from '../hooks/usePopulation';
import styles from '../styles/Home.module.css';

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
