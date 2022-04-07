import type { NextPage } from 'next';

import { usePrefectures } from 'src/hooks/usePrefectures';

const Home: NextPage = () => {
  const { data, error } = usePrefectures();

  console.log(data);

  return (
    <div>
      <p>home</p>
    </div>
  );
};

export default Home;
