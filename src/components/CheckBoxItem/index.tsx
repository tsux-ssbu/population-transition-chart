import { ChangeEventHandler, memo, VFC } from 'react';

import { PrefectureType } from '../../types/prefecture';
import styles from './CheckboxItem.module.css';

type Props = {
  prefecture: PrefectureType;
  updatePopulationData: (pref: PrefectureType) => Promise<void>;
  deletePopulationData: (prefName: string) => void;
};

export const CheckboxItem: VFC<Props> = memo((props) => {
  const { prefecture, updatePopulationData, deletePopulationData } = props;

  const handleChange: ChangeEventHandler<HTMLInputElement> = async (e) => {
    if (e.target.checked) {
      updatePopulationData(prefecture);
    } else {
      deletePopulationData(prefecture.prefName);
    }
  };

  return (
    <li>
      <label className={styles.checkbox}>
        <input type='checkbox' name='prefectures' onChange={handleChange} />
        <span>
          {prefecture.prefName.length === 3 ? `${prefecture.prefName}　` : `${prefecture.prefName}`}
        </span>
      </label>
    </li>
  );
});
