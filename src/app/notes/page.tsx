import React from 'react';
import styles from './page.module.css';
import Sidebar from '../components/sidebar';
import NotesList from '../components/notesList';
import TextEditor from '../components/textEditor';

const Page = () => {
  return (
    // Only NotesList is visible below sm screens
    <div className='container-fluid g-0'>
      <div className='d-block d-sm-block d-md-none'>
        <div className='col-12 g-0'>
          <NotesList />
        </div>
      </div>

      {/* ---- Displaying content and layout above md screens ---  */}
      <div className='d-none d-sm-none d-md-block'>
        <div className='row'>
          <div className='col-3 g-0'>
            <Sidebar />
          </div>
          <div className='col-9'>
            <div className='row'>
              <div className='col-5 g-0'>
                <NotesList />
              </div>
              <div className='col-7 g-0'>
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
