import React from 'react';
import styles from './notesCard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import {
  addNoteId,
  deleteNotes,
  selectCurrentNoteId,
  updateNoteCategory,
} from '@/redux/features/notesSlice';

interface Note {
  id: string;
  title: string;
  description: string;
  timeStamp: number;
}

const NotesCard: React.FC<{ note: Note }> = ({ note }) => {
  // to dispatch to redux store
  const dispatch = useAppDispatch();

  // To update Category
  const handleUpdateCategory = (id: string) => {
    const newCategory = prompt('Enter the new category:');
    if (newCategory !== null && newCategory !== '') {
      dispatch(updateNoteCategory({ id, category: newCategory }));
    }
  };

  // To determine which notes is active
  const activeNoteId = useAppSelector(selectCurrentNoteId);

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

  return (
    <div
      className={`card mb-2 ${
        activeNoteId === note.id ? styles.activeCard : ''
      }`}
      onClick={() => handleUpdateNoteId(note.id)}
    >
      <div className='card-body'>
        <div className={styles.tagAndTitle}>
          <div>
            <h5 className='card-title'>{note.title}</h5>
          </div>
          <div className={styles.tags}>
            <FontAwesomeIcon
              icon={faTag}
              onClick={() => handleUpdateCategory(note.id)}
            />
          </div>
          {/* -------------- Title -------------------- */}
        </div>
        {/* ---------------- Description ---------------- */}
        <p className='card-text'>
          {note.description && note.description.substr(0, 100) + '...'}
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
            <FontAwesomeIcon icon={faTrash} className={styles.deleteIcon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotesCard;
