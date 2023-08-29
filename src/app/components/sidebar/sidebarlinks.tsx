import React, { useState } from 'react';
import styles from './sidebarlinks.module.css';
import { faTrash, faPlus, faList } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  addNote,
  addNoteId,
  setSearchQuery,
} from '@/redux/features/notesSlice';
import { useAppDispatch } from '@/redux/hooks';

const Sidebarlinks: React.FC = () => {
  const dispatch = useAppDispatch();

  // to determine active id
  const [activeItemId, setActiveItemId] = useState<string | null>(null);

  // Items to display in the sidebar
  const items = [
    {
      id: 'addNote',
      icon: faPlus,
      title: 'Add New Note',
      onClick: () => {
        handleItemClick('addNote');
        handleAddNoteClick();
      },
    },
    {
      id: 'viewAllNotes',
      icon: faList,
      title: 'Notes List',
      onClick: () => {
        handleItemClick('viewAllNotes');
        handleViewAllNotes();
      },
    },
    {
      id: 'trash',
      icon: faTrash,
      title: 'Trash',
      onClick: () => handleItemClick('trash'),
    },
  ];

  const handleAddNoteClick = () => {
    // Adding a new Note
    const newNote = {
      id: uuidv4(),
      timeStamp: Date.now(),
      title: 'Untitled Note',
      description: 'Click to add a note',
      category: 'undefined',
    };
    // dispatching notes and note id to redux store
    dispatch(addNote(newNote));
    dispatch(addNoteId(newNote.id));
  };

  const handleViewAllNotes = () => {
    dispatch(setSearchQuery(''));
  };

  const handleItemClick = (itemId: string) => {
    setActiveItemId(itemId);
  };

  return (
    <ul className={styles.list}>
      {/* ------- Mapping through the sidebar items ------- */}
      {items.map((item) => (
        <li
          key={item.id}
          className={`${styles.listItem} ${
            activeItemId === item.id ? styles.active : ''
          }`}
          onClick={item.onClick}
        >
          <div className={styles.items}>
            <FontAwesomeIcon icon={item.icon} className={styles.icon} />
            <span className={styles.title}>{item.title}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Sidebarlinks;
