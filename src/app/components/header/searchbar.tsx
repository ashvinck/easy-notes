import React, { ChangeEvent } from 'react';
import styles from './searchbar.module.css';
import { useAppDispatch } from '@/redux/hooks';
import { setSearchQuery } from '@/redux/features/notesSlice';

const Searchbar: React.FC = () => {
  // To dispatch the state to store
  const dispatch = useAppDispatch();

  // To handle search queries
  const handleSearchQuery = (event: ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value;
    dispatch(setSearchQuery(searchValue));
  };

  return (
    // input for searching
    <div className='col-12'>
      <div className={styles.wrapper}>
        <input
          className={styles.input}
          type='text'
          placeholder='Search for Notes'
          onChange={handleSearchQuery}
        />
      </div>
    </div>
  );
};

export default Searchbar;
