import { memo, VFC } from 'react';

import styles from 'src/components/Header/Header.module.css';

export const Header: VFC = memo(() => {
  return (
    <header className={styles.header}>
      <h1>都道府県別の総人口推移</h1>
    </header>
  );
});
