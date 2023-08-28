import React from 'react';
import styles from './page.module.css';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { addNoteId, selectViewNotes } from '@/redux/features/notesSlice';

// List of Notes
const NotesList: React.FC = () => {
  // to dispatch to redux store
  const dispatch = useAppDispatch();

  // To update Id to perform actions on the selected note
  const handleUpdateNoteId = (id: string) => {
    dispatch(addNoteId(id));
  };

  // retrieve state from redux store
  const viewNotes = useAppSelector(selectViewNotes);
  // console.log(viewNotes);

  return (
    // Wrapper
    <div className={styles.wrapper}>
      <div className={styles.notesList}>
        <div className={styles.cardsWrapper}>
          {/* ----- Mapping Through the Notes List --------- */}
          {/* ---- Card ------ */}
          {viewNotes.map((note) => (
            <div
              className='card mb-2'
              key={note.id}
              onClick={() => handleUpdateNoteId(note.id)}
            >
              <div className='card-body'>
                <h5 className='card-title'>{note.title}</h5>
                <p className='card-text'>{note.description}</p>
                <span>
                  <small className={styles.small}>
                    Last Modified{' '}
                    {new Date(note.timeStamp).toLocaleDateString('en-GB', {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </small>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotesList;
