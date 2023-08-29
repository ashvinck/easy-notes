'use client';

import { selectViewNotes, setSearchQuery } from '@/redux/features/notesSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import React, { useState } from 'react';
import styles from './sortByCategory.module.css';

const SortByCategory: React.FC = () => {
  const dispatch = useAppDispatch();

  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  // Get the notes from the store
  const categoryList = useAppSelector(selectViewNotes);

  const handleCategoryClick = (category: string) => {
    dispatch(setSearchQuery(category)); // Update search query in Redux store
    setActiveCategory(category);
  };

  const uniqueCategories = Array.from(
    new Set(categoryList.map((note) => note.category))
  );

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h6>Categories</h6>
      </div>
      <div className={styles.wrapper}>
        {uniqueCategories.map((category) => (
          <div
            className={styles.cardContainer}
            key={category}
            onClick={() => handleCategoryClick(category)}
          >
            <div
              className={`card p-2 mx-1 ${
                activeCategory === category ? styles.activeCard : ''
              }`}
            >
              <div className='card-subtitle text-body-secondary'>
                {category}
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default SortByCategory;
