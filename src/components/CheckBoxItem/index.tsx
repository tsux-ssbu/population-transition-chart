import { ChangeEventHandler, memo, VFC } from 'react';

import { PrefectureType } from 'src/types/prefecture';
import styles from './CheckboxItem.module.css';

type Props = {
  prefecture: PrefectureType;
  updatePopulationData: (pref: PrefectureType) => Promise<void>;
};

export const CheckboxItem: VFC<Props> = memo((props) => {
  const { prefecture, updatePopulationData } = props;

  const handleChange: ChangeEventHandler<HTMLInputElement> = async (e) => {
    if (e.target.checked) {
      updatePopulationData(prefecture);
    }
  };

  return (
    <div>
      <label className={styles.checkbox}>
        <input type='checkbox' name='prefectures' onChange={handleChange} />
        <span>
          {prefecture.prefName.length === 3 ? `${prefecture.prefName}　` : `${prefecture.prefName}`}
        </span>
      </label>
    </div>
  );
});
