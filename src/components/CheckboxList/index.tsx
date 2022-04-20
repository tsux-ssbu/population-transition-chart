import { ChangeEvent, memo, VFC } from 'react';

import { usePrefectures } from '../../hooks/usePrefectures';
import { PrefectureType } from '../../types/prefecture';
import { useDebounce } from '../../hooks/useDebounce';
import styles from './CheckboxList.module.css';

type Props = {
  updatePopulationData: (pref: PrefectureType) => Promise<void>;
  deletePopulationData: (prefName: string) => void;
};

export const CheckBoxList: VFC<Props> = memo((props) => {
  const { updatePopulationData, deletePopulationData } = props;
  const { prefectures, isError, isLoading } = usePrefectures();
  const { debounce } = useDebounce(300);

  const handleChange = (e: ChangeEvent<HTMLInputElement>, prefecture: PrefectureType) => {
    if (e.target.checked) {
      debounce(() => updatePopulationData(prefecture));
    } else {
      debounce(() => deletePopulationData(prefecture.prefName));
    }
  };

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
            <li key={prefecture.prefCode}>
              <label className={styles.checkbox}>
                <input
                  type='checkbox'
                  name='prefectures'
                  onChange={(e) => handleChange(e, prefecture)}
                />
                <span>
                  {prefecture.prefName.length === 3
                    ? `${prefecture.prefName}　`
                    : `${prefecture.prefName}`}
                </span>
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
});
