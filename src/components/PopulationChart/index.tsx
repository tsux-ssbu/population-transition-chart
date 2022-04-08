import { memo, VFC } from 'react';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

import { PopulationDatasetsType } from '../../types/chart';
import styles from './PopulationChart.module.css';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

type Props = {
  labels: number[];
  datasets: PopulationDatasetsType[];
};

export const PopulationChart: VFC<Props> = memo((props) => {
  const { labels, datasets } = props;

  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
      title: {
        display: true,
        text: '総人口推移グラフ',
        font: {
          size: 18,
        },
        color: 'rgba(0, 0, 0, 0.85)',
        align: 'start' as const,
      },
    },
  };

  const graphData = {
    labels: labels,
    datasets: datasets,
  };

  return (
    <div className={styles.container}>
      <Line height={500} width={500} data={graphData} options={options} />
    </div>
  );
});
