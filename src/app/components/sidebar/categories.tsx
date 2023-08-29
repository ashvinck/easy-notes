'use client';

import React, { useState } from 'react';
import styles from './categories.module.css';
import { faFolder } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { selectViewNotes, setSearchQuery } from '@/redux/features/notesSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

const Categories: React.FC = () => {
  // To dispatch to the store
  const dispatch = useAppDispatch();

  // To determine the active item
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Get the notes from the store
  const categoryList = useAppSelector(selectViewNotes);

  // To view notes according to the category and set the active item
  const handleCategoryClick = (category: string) => {
    dispatch(setSearchQuery(category)); // Update search query in Redux store
    setActiveCategory(category);
  };

  // To populate the list with the categories currently available
  const uniqueCategories = Array.from(
    new Set(categoryList.map((note) => note.category))
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>
        <div className='row'>
          <div className='col-8'>
            <h5>Categories</h5>
          </div>
          <div className='col-4'>{/* <FontAwesomeIcon icon={faPlus} /> */}</div>
        </div>
      </div>
      <ul className={styles.list}>
        {/* ------  Mapping ------- */}
        {uniqueCategories.map((category) => (
          <li
            key={category}
            className={`${styles.listItem} ${
              activeCategory === category ? styles.activeCategory : ''
            }`}
            onClick={() => handleCategoryClick(category)}
          >
            <div className={styles.items}>
              <FontAwesomeIcon icon={faFolder} className={styles.icon} />
              <span className={styles.title}>{category}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
