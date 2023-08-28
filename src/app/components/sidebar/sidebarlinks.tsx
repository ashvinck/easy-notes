'use client';

import React from 'react';
import styles from './sidebarlinks.module.css';
import { faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from 'uuid';
uuidv4();
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { addNote, addNoteId } from '@/redux/features/notesSlice';
import { useAppDispatch } from '@/redux/hooks';

const Sidebarlinks: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleAddNoteClick = () => {
    // Adding a new Note
    const newNote = {
      id: uuidv4(),
      timeStamp: Date.now(),
      title: 'Untitled Note',
      description: 'Click to add a note',
    };
    // dispatching notes and note id to redux store
    dispatch(addNote(newNote));
    dispatch(addNoteId(newNote.id));
  };

  return (
    <ul className={styles.list}>
      {/* ------ ADD Notes -------- */}
      <li className={styles.listItem}>
        <div className={styles.items} onClick={handleAddNoteClick}>
          <FontAwesomeIcon icon={faPlus} className={styles.icon} />
          <span className={styles.title}>Add New Note</span>
        </div>
      </li>
      {/* ----- Add Trash ----------- */}
      <li className={styles.listItem}>
        <div className={styles.items}>
          <FontAwesomeIcon icon={faTrash} className={styles.icon} />
          <span className={styles.title}>Trash</span>
        </div>
      </li>
    </ul>
  );
};

export default Sidebarlinks;
