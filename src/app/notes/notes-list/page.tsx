import React, { useEffect } from 'react';
import styles from './page.module.css';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import {
  addNoteId,
  deleteNotes,
  selectCurrentNoteId,
  selectSearchedNotes,
} from '@/redux/features/notesSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

// List of Notes
const NotesList: React.FC = () => {
  // to dispatch to redux store
  const dispatch = useAppDispatch();

  // To update Id to perform actions on the selected note
  const handleUpdateNoteId = (id: string) => {
    dispatch(addNoteId(id));
  };

  // To delete the note
  const handleDeleteNote = (id: string) => {
    if (window.confirm('Are you sure you want to delete this note?')) {
      dispatch(deleteNotes(id));
    }
  };
  // retrieve state from redux store
  const getNotesList = useAppSelector(selectSearchedNotes);
  // console.log(viewNotes);

  // To determine which notes is active
  const activeNoteId = useAppSelector(selectCurrentNoteId);

  return (
    // Wrapper
    <div className={styles.wrapper}>
      <div className={styles.notesList}>
        <div className={styles.cardsWrapper}>
          {/* ------------ Card -------------- */}
          {getNotesList.length === 0 ? (
            <div className='text-center mt-3'>Nothing to see here</div>
          ) : (
            getNotesList.map((note) => (
              <div
                className={`card mb-2 ${
                  activeNoteId === note.id ? styles.activeCard : ''
                }`}
                key={note.id}
                onClick={() => handleUpdateNoteId(note.id)}
              >
                <div className='card-body'>
                  {/* -------------- Title -------------------- */}
                  <h5 className='card-title'>{note.title}</h5>
                  {/* ---------------- Description ---------------- */}
                  <p className='card-text'>
                    {note.description &&
                      note.description.substr(0, 100) + '...'}
                  </p>
                  {/* --------------- Action and Details ----------- */}
                  <div className={styles.details}>
                    <div>
                      <small className={styles.small}>
                        Last Modified{' '}
                        {new Date(note.timeStamp).toLocaleDateString('en-GB', {
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </small>
                    </div>
                    <div onClick={() => handleDeleteNote(note.id)}>
                      <FontAwesomeIcon
                        icon={faTrash}
                        className={styles.deleteIcon}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default NotesList;
