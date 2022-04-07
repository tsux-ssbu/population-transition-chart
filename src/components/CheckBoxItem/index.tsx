import { ChangeEventHandler, memo, VFC } from 'react';

import { PrefectureType } from 'src/types/prefecture';
import { usePopulation } from 'src/hooks/usePopulation';
import styles from './CheckboxItem.module.css';

type Props = {
  prefecture: PrefectureType;
};

export const CheckboxItem: VFC<Props> = memo((props) => {
  const { prefecture } = props;
  const { fetchPopulationByPrefCode } = usePopulation();

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.checked) {
      fetchPopulationByPrefCode(e.target.value);
    }
  };

  return (
    <div>
      <label className={styles.checkbox}>
        <input
          type='checkbox'
          name='prefectures'
          value={prefecture.prefCode}
          onChange={handleChange}
        />
        <span>
          {prefecture.prefName.length === 3 ? `${prefecture.prefName}　` : `${prefecture.prefName}`}
        </span>
      </label>
    </div>
  );
});
