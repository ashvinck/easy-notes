import React from 'react';
import styles from './navbarLinks.module.css';
// Fa icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faFilter, faPlus } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from 'uuid';
uuidv4();
import { useAppDispatch } from '@/redux/hooks';
import { addNote, setShowCategory } from '@/redux/features/notesSlice';

// Visible only in tablet and mobile devices

const NavbarLinks: React.FC = () => {
  // To get the dispatch function from redux;
  const dispatch = useAppDispatch();

  // HandleClick to update state
  const handleAddNotesClick = () => {
    // Adding a new Note
    const newNote = {
      id: uuidv4(),
      timeStamp: Date.now(),
      title: 'Untitled Note',
      description: 'Click to add a note',
      category: 'undefined',
    };
    dispatch(addNote(newNote));
    dispatch(setShowCategory(false));
  };

  const handleSortClick = () => {
    dispatch(setShowCategory(true));
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
      <div className={styles.links}>
        <FontAwesomeIcon
          className='d-block d-sm-block d-md-none cursor-pointer'
          icon={faTrash}
        />
      </div>

      {/* ---------- Fiter Notes Button -------- */}
      <div className={styles.links}>
        <FontAwesomeIcon
          className='d-block d-sm-block d-md-none cursor-pointer'
          icon={faFilter}
          onClick={handleSortClick}
        />
      </div>
    </div>
  );
};

export default NavbarLinks;
// import React, { useState } from 'react';
// import styles from './navbarLinks.module.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTrash, faFilter, faPlus } from '@fortawesome/free-solid-svg-icons';
// import { v4 as uuidv4 } from 'uuid';
// import { useAppDispatch } from '@/redux/hooks';
// import { addNote } from '@/redux/features/notesSlice';

// const iconData = [
//   { id: 'addNote', icon: faPlus },
//   { id: 'viewNotes', icon: faTrash },
//   { id: 'filterNotes', icon: faFilter },
// ];

// const NavbarLinks: React.FC = () => {
//   const dispatch = useAppDispatch();
//   const [activeIcon, setActiveIcon] = useState(null);

//   const handleClick = (id) => {
//     setActiveIcon(id);

//     if (id === 'addNote') {
//       const newNote = {
//         id: uuidv4(),
//         timeStamp: Date.now(),
//         title: 'Untitled Note',
//         description: 'Add description',
//         category: 'undefined',
//       };
//       dispatch(addNote(newNote));
//     }
//     // Handle other click actions here
//   };

//   return (
//     <div className={styles.wrapper}>
//       {iconData.map((iconItem) => (
//         <div
//           key={iconItem.id}
//           className={`${styles.links} ${
//             activeIcon === iconItem.id ? styles.active : ''
//           }`}
//           onClick={() => handleClick(iconItem.id)}
//         >
//           <FontAwesomeIcon
//             className='d-block d-sm-block d-md-none cursor-pointer'
//             icon={iconItem.icon}
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default NavbarLinks;
