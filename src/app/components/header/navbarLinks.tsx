import React from 'react';
import styles from './navbarLinks.module.css';
// Fa icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faFilter, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useAppDispatch } from '@/redux/hooks';
import { setShowEditor } from '@/redux/features/notesSlice';

// Visible only in tablet and mobile devices

const NavbarLinks: React.FC = () => {
  // To get the dispatch function from redux;
  const dispatch = useAppDispatch();

  // HandleClick to update state
  const handleAddNotesClick = () => {
    dispatch(setShowEditor(true));
  };

  const handleShowNotesList = () => {
    dispatch(setShowEditor(false));
  };

  return (
    <div className={styles.wrapper}>
      {/* ------ Add Notes Button ------ */}
      <div className={styles.links} onClick={handleAddNotesClick}>
        <FontAwesomeIcon
          className='d-block d-sm-block d-md-none pe-auto'
          icon={faPlus}
        />
      </div>

      {/* ------ View Notes List Button ------- */}
      <div className={styles.links} onClick={handleShowNotesList}>
        <FontAwesomeIcon
          className='d-block d-sm-block d-md-none cursor-pointer'
          icon={faList}
          onClick={handleShowNotesList}
        />
      </div>

      {/* ---------- Fiter Notes Button -------- */}
      <FontAwesomeIcon
        className='d-block d-sm-block d-md-none cursor-pointer'
        icon={faFilter}
      />
    </div>
  );
};

export default NavbarLinks;
