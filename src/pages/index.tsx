import type { NextPage } from 'next';

import { CheckBoxList } from 'src/components/CheckboxList';
import { Header } from 'src/components/Header';

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <CheckBoxList />
    </div>
  );
};

export default Home;
