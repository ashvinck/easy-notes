'use client';

import React from 'react';
import styles from './sidebarlinks.module.css';
import { faList, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { setShowEditor } from '@/redux/features/notesSlice';
import { useAppDispatch } from '@/redux/hooks';

const Sidebarlinks: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleAddNoteClick = () => {
    dispatch(setShowEditor(true)); // Dispatch the action to show the TextEditor
  };

  const handleViewNotesClick = () => {
    dispatch(setShowEditor(false)); // Dispatch the action to hide the TextEditor
  };

  // const sidebarLink = [
  //   { title: 'Add New Note', icon: faPlus },
  //   { title: 'View Notes', icon: faList },
  //   { title: 'Trash', icon: faTrash },
  // ];

  return (
    <ul className={styles.list}>
      <li className={styles.listItem}>
        <div className={styles.items} onClick={handleAddNoteClick}>
          <FontAwesomeIcon icon={faPlus} className={styles.icon} />
          <span className={styles.title}>Add New Note</span>
        </div>
      </li>
      <li className={styles.listItem}>
        <div className={styles.items} onClick={handleViewNotesClick}>
          <FontAwesomeIcon icon={faList} className={styles.icon} />
          <span className={styles.title}>View Notes</span>
        </div>
      </li>
      {/* <li className={styles.listItem}>
        <div className={styles.items} onClick={handleViewNotesClick}>
          <FontAwesomeIcon icon={faList} className={styles.icon} />
          <span className={styles.title}>View Notes</span>
        </div>
      </li> */}
    </ul>
  );
};

export default Sidebarlinks;
