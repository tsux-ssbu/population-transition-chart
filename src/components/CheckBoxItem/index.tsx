import { memo, VFC } from 'react';
import { PrefectureType } from 'src/types/prefecture';

type Props = {
  prefecture: PrefectureType;
};

export const CheckboxItem: VFC<Props> = memo((props) => {
  const { prefecture } = props;

  return (
    <label>
      <input type='checkbox' name='prefectures' />
      <span>
        {prefecture.prefName.length === 3 ? `${prefecture.prefName}　` : `${prefecture.prefName}`}
      </span>
    </label>
  );
});
