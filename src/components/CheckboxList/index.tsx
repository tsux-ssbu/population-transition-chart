import { memo, VFC } from 'react';
import { PrefectureType } from 'src/types/prefecture';
import { CheckboxItem } from '../CheckBoxItem';

type Props = {
  prefectures: PrefectureType[] | undefined;
};

export const CheckBoxList: VFC<Props> = memo((props) => {
  const { prefectures } = props;

  return (
    <div>
      <h3>都道府県</h3>
      <div>
        {prefectures?.map((prefecture) => {
          return <CheckboxItem key={prefecture.prefCode} prefecture={prefecture} />;
        })}
      </div>
    </div>
  );
});
