import React, { useEffect, useRef, useState } from 'react';
import styles from './page.module.css';
import { v4 as uuidv4 } from 'uuid';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import {
  addNoteId,
  selectCurrentNote,
  selectCurrentNoteId,
  updateNotes,
} from '@/redux/features/notesSlice';

const TextEditor: React.FC = () => {
  // to get ref to the text area
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  // to get state from the redux store
  const getNoteId = useAppSelector(selectCurrentNoteId);
  const getCurrentNote = useAppSelector(selectCurrentNote);
  const dispatch = useAppDispatch();

  // state for description
  const [description, setDescription] = useState<string>(
    getCurrentNote?.description || ''
  );

  // to change only the description
  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(event.target.value);
  };

  const handleSave = () => {
    saveNote();
  };

  // onBlur saveNote is called and the following things are saved.
  const saveNote = () => {
    if (description) {
      const newNote = {
        id: getNoteId || uuidv4(),
        timeStamp: Date.now(),
        title: extractTitle(description),
        description: description.trim(),
      };
      dispatch(updateNotes(newNote));
      dispatch(addNoteId(newNote.id));
    }
  };

  // To set Title for the Notes
  const extractTitle = (text: string) => {
    const firstLine = text.trim().split('\n')[0];
    return firstLine || 'Untitled';
  };

  // To automate the content
  useEffect(() => {
    if (textAreaRef.current && getCurrentNote) {
      if (textAreaRef.current.value !== getCurrentNote.description) {
        textAreaRef.current.value = getCurrentNote.description;
        setDescription(getCurrentNote.description);
      }
    }
  }, [getCurrentNote]);

  // to shift the focus the text area particularly in mobile devices
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
        value={description}
        onChange={handleDescriptionChange}
      />
    </div>
  );
};

export default TextEditor;
