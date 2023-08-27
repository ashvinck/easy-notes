import React from 'react';
import styles from './textEditor.module.css';

const TextEditor: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <textarea className={styles.inputArea} />
    </div>
  );
};

export default TextEditor;
