import React from 'react';
import styles from './page.module.css';
import { useAppSelector } from '@/redux/hooks';
import { selectSearchedNotes } from '@/redux/features/notesSlice';
import NotesCard from './notesCard';

// List of Notes
const NotesList: React.FC = () => {
  // retrieve state from redux store
  const getNotesList = useAppSelector(selectSearchedNotes);

  return (
    // Wrapper
    <div className={styles.wrapper}>
      <div className={styles.notesList}>
        <div className={styles.cardsWrapper}>
          {/* ------------ Card -------------- */}
          {getNotesList.length === 0 ? (
            <div className='text-center mt-3'>Nothing to see here</div>
          ) : (
            getNotesList.map((note) => <NotesCard note={note} key={note.id} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default NotesList;
