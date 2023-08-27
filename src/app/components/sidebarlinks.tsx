import React from 'react';
import styles from './sidebarlinks.module.css';
import { faList, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const Sidebarlinks: React.FC = () => {
  const sidebarLink = [
    { title: 'Add New Note', icon: faPlus },
    { title: 'View Notes', icon: faList },
    { title: 'Trash', icon: faTrash },
  ];

  return (
    <ul className={styles.list}>
      {sidebarLink.map((link) => (
        <li key={link.title} className={styles.listItem}>
          <div className={styles.items}>
            <FontAwesomeIcon icon={link.icon} className={styles.icon} />
            <span className={styles.title}>{link.title}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Sidebarlinks;
