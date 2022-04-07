import { memo, VFC } from 'react';

import { PrefectureType } from 'src/types/prefecture';
import styles from './CheckboxItem.module.css';

type Props = {
  prefecture: PrefectureType;
};

export const CheckboxItem: VFC<Props> = memo((props) => {
  const { prefecture } = props;

  return (
    <div>
      <label className={styles.checkbox}>
        <input type='checkbox' name='prefectures' />
        <span>
          {prefecture.prefName.length === 3 ? `${prefecture.prefName}　` : `${prefecture.prefName}`}
        </span>
      </label>
    </div>
  );
});
