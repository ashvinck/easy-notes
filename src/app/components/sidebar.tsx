import Link from 'next/link';
import React from 'react';
import styles from './sidebar.module.css';

const Sidebar: React.FC = () => {
  return <div className={styles.sidebarWrapper}>Hello from Sidebar</div>;
};

export default Sidebar;
