import { memo, VFC } from 'react';

import { PrefectureType } from 'src/types/prefecture';
import { CheckboxItem } from 'src/components/CheckboxItem';
import styles from './CheckboxList.module.css';

type Props = {
  prefectures: PrefectureType[] | undefined;
};

export const CheckBoxList: VFC<Props> = memo((props) => {
  const { prefectures } = props;

  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>都道府県</h3>
      <div className={styles.checkbox_list}>
        {prefectures?.map((prefecture) => {
          return <CheckboxItem key={prefecture.prefCode} prefecture={prefecture} />;
        })}
      </div>
    </div>
  );
});
