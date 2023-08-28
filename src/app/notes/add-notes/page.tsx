'use client';

import React, { useEffect, useRef } from 'react';
import styles from './page.module.css';
import { v4 as uuidv4 } from 'uuid';
uuidv4();
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import {
  addNoteId,
  selectCurrentNote,
  selectCurrentNoteId,
  selectViewNotes,
  updateNotes,
} from '@/redux/features/notesSlice';
// import { addNote, selectShowEditor } from '@/redux/features/notesSlice';

const TextEditor: React.FC = () => {
  // to focus on the text editor when sidebar link is clicked
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  // getting state from the redux
  const getNoteId = useAppSelector(selectCurrentNoteId);
  console.log('currentNoteId', getNoteId);

  const getCurrentNote = useAppSelector(selectCurrentNote);

  // dispatching current state to redux store
  const dispatch = useAppDispatch();
  // handle save on blur event
  const handleSave = () => {
    saveNote();
  };

  const saveNote = () => {
    const text = textAreaRef.current?.value;
    if (text) {
      const title = extractTitle(text);
      const description = text.replace(title, '');
      const newNote = {
        id: getNoteId || uuidv4(),
        timeStamp: Date.now(),
        title: title,
        description: description,
      };
      dispatch(updateNotes(newNote));
      dispatch(addNoteId(newNote.id));
    }
  };

  const extractTitle = (text: string) => {
    const firstLine = text.trim().split('\n')[0];
    return firstLine || 'Untitled';
  };

  useEffect(() => {
    if (textAreaRef.current && getCurrentNote) {
      textAreaRef.current.value =
        getCurrentNote.title + '\n' + getCurrentNote.description;
    }
  }, [getCurrentNote]);

  useEffect(() => {
    if (getNoteId && textAreaRef.current) {
      textAreaRef.current.focus();
    }
  }, [getNoteId]);

  return (
    <div className={styles.wrapper}>
      <textarea
        className={styles.inputArea}
        ref={textAreaRef}
        placeholder='Start Writing here...'
        onBlur={handleSave}
        defaultValue={getCurrentNote?.description || ''}
      />
    </div>
  );
};

export default TextEditor;
