import React, { useState } from 'react';
import styles from './sidebarlinks.module.css';
import { faPlus, faList } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  addNote,
  addNoteId,
  setSearchQuery,
} from '@/redux/features/notesSlice';
import { useAppDispatch } from '@/redux/hooks';

const Sidebarlinks: React.FC = () => {
  // To dispatch to the store
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
  ];

  // Adding a new Note
  const handleAddNoteClick = () => {
    const newNote = {
      id: uuidv4(),
      timeStamp: Date.now(),
      title: 'Untitled Note',
      description: 'Click to add a note',
      category: 'Note-1',
    };
    // dispatching notes and note id to redux store
    dispatch(addNote(newNote));
    dispatch(addNoteId(newNote.id));
  };

  // Setting searchTerm to "" triggering list to display all notes
  const handleViewAllNotes = () => {
    dispatch(setSearchQuery(''));
  };

  // To set the current item to active state
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
