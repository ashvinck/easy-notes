import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className='container-fluid p-5 min-vh-100 d-flex flex-column'>
      <div className='text-center'>
        <div className='spinner-border' role='status'>
          <span className='sr-only'>Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default Loading;
