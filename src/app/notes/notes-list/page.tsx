import React from 'react';
import styles from './page.module.css';

// List of Notes
const NotesList: React.FC = () => {
  return (
    // Wrapper
    <div className={styles.wrapper}>
      <div className={styles.notesList}>
        <div className={styles.cardsWrapper}>
          {/* ---- Card ------ */}
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Card Title</h5>
              <p className='card-text'>This is an example of a card content</p>
              <span>
                <small className={styles.small}>Time Stamp</small>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotesList;
