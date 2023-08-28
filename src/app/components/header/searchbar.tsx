import React from 'react';
import styles from './searchbar.module.css';

const Searchbar: React.FC = () => {
  return (
    // input for searching
    <div className='col-12'>
      <div className={styles.wrapper}>
        <input
          className={styles.input}
          type='text'
          placeholder='Search for Notes'
        />
      </div>
    </div>
  );
};

export default Searchbar;
