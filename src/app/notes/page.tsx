'use client';

import React from 'react';
import styles from './page.module.css';
import Sidebar from '../components/sidebar';
import Header from '../components/header';
import NotesList from './notes-list/page';
import Searchbar from '../components/header/searchbar';
import TextEditor from './add-notes/page';
import { useAppSelector } from '@/redux/hooks';
import { selectShowCategories } from '@/redux/features/notesSlice';
import SortByCategory from '../components/category/sortByCategory';

const Page = () => {
  // To Get the showEditor state from Redux
  const showCategory = useAppSelector(selectShowCategories);

  return (
    // Only NotesList is visible below sm screens
    <div className='container-fluid g-0'>
      <div className='d-block d-sm-block d-md-none'>
        <div className={styles.wrapper}>
          <Header />
          <div className='col-12 g-0'>
            {showCategory ? <SortByCategory /> : null}
            <NotesList />
            <TextEditor />
          </div>
        </div>
      </div>

      {/* ---- Displaying content and layout above md screens ---  */}
      <div className='d-none d-sm-none d-md-block'>
        <div className='row'>
          <div className='col-3 col-lg-2 g-0'>
            <Sidebar />
          </div>
          <div className='col-9 col-lg-10'>
            <div className='row'>
              <div className='col-5 col-lg-4 g-0'>
                <Searchbar />
                <NotesList />
              </div>
              <div className='col-7 col-lg-8  g-0'>
                <TextEditor />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
