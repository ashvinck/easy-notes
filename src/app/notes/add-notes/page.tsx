'use client';

import React, { useEffect, useRef } from 'react';
import styles from './page.module.css';
import { useAppSelector } from '@/redux/hooks';
import { selectShowEditor } from '@/redux/features/notesSlice';

const TextEditor: React.FC = () => {
  // to focus on the text editor when sidebar link is clicked
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  // getting state from the redux
  const showEditor = useAppSelector(selectShowEditor);

  // to focus
  useEffect(() => {
    if (showEditor) {
      textAreaRef.current?.focus();
    }
  }, [showEditor]);

  return (
    <div className={styles.wrapper}>
      <textarea
        className={styles.inputArea}
        ref={textAreaRef}
        placeholder='Start Writing here...'
      />
    </div>
  );
};

export default TextEditor;
