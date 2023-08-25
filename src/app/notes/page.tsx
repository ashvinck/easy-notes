import React from 'react';
import styles from './page.module.css';
import Sidebar from '../components/sidebar';
import NotesList from '../components/notesList';
import TextEditor from '../components/textEditor';

const Page = () => {
  return (
    <div className='container-fluid'>
      <div className='d-block d-sm-block d-md-none'>
        <div className='col-12'>
          <NotesList />
        </div>
      </div>
      <div className='d-none d-sm-none d-md-block'>
        <div className='row'>
          <div className='col-12 col-md-4'>
            <Sidebar />
          </div>
          <div className='col-10 col-md-8'>
            <div className='row'>
              <div className='col-12 col-md-6'>
                <NotesList />
              </div>
              <div className='col-12 col-md-6'>
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
