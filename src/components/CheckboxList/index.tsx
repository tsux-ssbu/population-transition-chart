import { memo, VFC } from 'react';

import { usePrefectures } from '../../hooks/usePrefectures';
import { PrefectureType } from '../../types/prefecture';
import { CheckboxItem } from '../CheckboxItem';

import styles from './CheckboxList.module.css';

type Props = {
  updatePopulationData: (pref: PrefectureType) => Promise<void>;
  deletePopulationData: (prefName: string) => void;
};

export const CheckBoxList: VFC<Props> = memo((props) => {
  const { updatePopulationData, deletePopulationData } = props;
  const { prefectures, isError, isLoading } = usePrefectures();

  if (isLoading) {
    return (
      <div className={styles.loading_container}>
        <span>loading...</span>
      </div>
    );
  }
  if (isError) {
    return (
      <div>
        <span>{isError.message}</span>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>都道府県</h3>
      <ul className={styles.checkbox_list}>
        {prefectures?.map((prefecture) => {
          return (
            <CheckboxItem
              key={prefecture.prefCode}
              prefecture={prefecture}
              updatePopulationData={updatePopulationData}
              deletePopulationData={deletePopulationData}
            />
          );
        })}
      </ul>
    </div>
  );
});
