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
  updateNotes,
} from '@/redux/features/notesSlice';

const TextEditor: React.FC = () => {
  // to focus on the text editor when sidebar link is clicked
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  // getting state from the redux
  const getNoteId = useAppSelector(selectCurrentNoteId);

  const getCurrentNote = useAppSelector(selectCurrentNote);

  // dispatching current state to redux store
  const dispatch = useAppDispatch();
  // handle save on blur event
  const handleSave = () => {
    saveNote();
  };

  // To update the note
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
        category: getCurrentNote?.category || 'Note-1',
      };
      dispatch(updateNotes(newNote));
      dispatch(addNoteId(newNote.id));
    }
  };

  // To extract the title
  const extractTitle = (text: string) => {
    const firstLine = text.trim().split('\n')[0];
    return firstLine || 'Untitled';
  };

  // To populate the textarea
  useEffect(() => {
    if (textAreaRef.current && getCurrentNote) {
      textAreaRef.current.value =
        getCurrentNote.title + '\n' + getCurrentNote.description;
    }
  }, [getCurrentNote]);

  // To focus the text area onclicking note card
  //{ Functionality mainly used in small and md screen devices only }
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
