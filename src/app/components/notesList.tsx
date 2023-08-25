import React from 'react';
import styles from './notesList.module.css';
// Fa icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faFilter, faPlus } from '@fortawesome/free-solid-svg-icons';

const NotesList: React.FC = () => {
  return (
    // Wrapper
    <div className={styles.wrapper}>
      {/* --- Actions--- */}
      <div className={styles.actions}>
        {/* ------ Search Input ----- */}
        <input
          className={styles.input}
          type='text'
          placeholder='Search for Notes'
        />
        {/* ------ Add Notes Button ------ */}
        <FontAwesomeIcon
          className='d-block d-sm-block d-md-none'
          icon={faPlus}
        />

        {/* ------ View Notes List Button ------- */}
        <FontAwesomeIcon
          className='d-block d-sm-block d-md-none'
          icon={faList}
        />

        {/* ---------- Fiter Notes Button -------- */}
        <FontAwesomeIcon
          className='d-block d-sm-block d-md-none'
          icon={faFilter}
        />
      </div>

      {/* ----- Divider -------- */}
      <hr></hr>
      <div className='styles.notesList'>
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
