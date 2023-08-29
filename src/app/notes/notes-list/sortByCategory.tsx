import { selectViewNotes, setSearchQuery } from '@/redux/features/notesSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import React from 'react';
import styles from './sortByCategory.module.css';

const SortByCategory: React.FC = () => {
  const dispatch = useAppDispatch();

  // Get the notes from the store
  const categoryList = useAppSelector(selectViewNotes);

  const handleCategoryClick = (category: string) => {
    dispatch(setSearchQuery(category)); // Update search query in Redux store
  };

  const uniqueCategories = Array.from(
    new Set(categoryList.map((note) => note.category))
  );

  return <div className={styles.wrapper}>SortByCategory</div>;
};

export default SortByCategory;
