import React from 'react';
import styles from './sidebar.module.css';
import Sidebarlinks from './sidebarlinks';
import Categories from './categories';

const Sidebar: React.FC = () => {
  return (
    <div className={styles.sidebarWrapper}>
      <Sidebarlinks />
      <hr />
      <Categories />
      <hr />
    </div>
  );
};

export default Sidebar;
