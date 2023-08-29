import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTrash,
  faFilter,
  faPlus,
  faList,
} from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from 'uuid';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import {
  addNote,
  selectShowCategories,
  setSearchQuery,
  setShowCategory,
} from '@/redux/features/notesSlice';
import styles from './navbarLinks.module.css';

const NavbarLinks: React.FC = () => {
  // To dispatch the state to the store
  const dispatch = useAppDispatch();

  // To select the state from store
  const showCategory = useAppSelector(selectShowCategories);

  // to determine active id
  const [activeItemId, setActiveItemId] = useState<string | null>(null);

  // Function which creates the notes with initial values
  const handleAddNoteClick = () => {
    const newNote = {
      id: uuidv4(),
      timeStamp: Date.now(),
      title: 'Untitled Note',
      description: 'Add description',
      category: 'Note-1',
    };
    // dispatching new note to the store
    dispatch(addNote(newNote));
  };

  // To sort the notes by category
  const handleSortClick = () => {
    dispatch(setShowCategory(!showCategory));
  };

  // To view all notes
  // We are setting searchquery to empty string which renders all notes
  const handleViewAllNotesClick = () => {
    dispatch(setSearchQuery(''));
  };

  // To set the active item link
  const handleItemClick = (itemId: string) => {
    setActiveItemId(itemId);
  };

  // Navbar Link Items
  const items = [
    {
      id: 'addNote',
      icon: faPlus,
      onClick: () => {
        handleItemClick('addNote');
        handleAddNoteClick();
      },
    },
    {
      id: 'viewList',
      icon: faList,
      onClick: () => {
        handleItemClick('viewList');
        handleViewAllNotesClick();
      },
    },
    {
      id: 'sort',
      icon: faFilter,
      onClick: () => {
        handleItemClick('sort');
        handleSortClick();
      },
    },
  ];

  return (
    <div className={styles.wrapper}>
      {/* -------- Mapping over Items -------- */}
      {items.map((item) => (
        <div
          className={`${styles.links} ${
            activeItemId === item.id ? styles.active : ''
          }`}
          onClick={item.onClick}
          key={item.id}
        >
          {/* --------------- Icon ------------ */}
          <FontAwesomeIcon
            className='d-block d-sm-block d-md-none pe-auto'
            icon={item.icon}
          />
        </div>
      ))}
    </div>
  );
};

export default React.memo(NavbarLinks);
