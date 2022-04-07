import { memo, VFC } from 'react';

import { CheckboxItem } from 'src/components/CheckboxItem';
import { usePrefectures } from 'src/hooks/usePrefectures';
import styles from './CheckboxList.module.css';

export const CheckBoxList: VFC = memo(() => {
  const { prefectures, isError, isLoading } = usePrefectures();

  if (isLoading) {
    return <div>loading...</div>;
  }
  if (isError) {
    return <div>{isError.message}</div>;
  }

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
