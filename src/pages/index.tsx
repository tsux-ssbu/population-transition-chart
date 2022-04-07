import type { NextPage } from 'next';

import { CheckBoxList } from 'src/components/CheckboxList';
import { Header } from 'src/components/Header';
import { usePrefectures } from 'src/hooks/usePrefectures';

const Home: NextPage = () => {
  const { prefectures, isError, isLoading } = usePrefectures();

  if (isLoading) {
    return <div>loading...</div>;
  }
  if (isError) {
    return <div>{isError.message}</div>;
  }

  return (
    <div>
      <Header />
      <CheckBoxList prefectures={prefectures} />
    </div>
  );
};

export default Home;
