import React, { useState } from 'react';
import styles from './categories.module.css';
import { faFolder, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Categories: React.FC = () => {
  const categoriesList = [{ title: 'Recipe' }, { title: 'To-do List' }];

  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>
        <div className='row'>
          <div className='col-8'>
            <h5>Categories</h5>
          </div>
          <div className='col-4'>
            <FontAwesomeIcon icon={faPlus} />
          </div>
        </div>
      </div>
      <ul className={styles.list}>
        {categoriesList.map((link) => (
          <li key={link.title} className={styles.listItem}>
            <div className={styles.items}>
              <FontAwesomeIcon icon={faFolder} className={styles.icon} />
              <span className={styles.title}>{link.title}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
