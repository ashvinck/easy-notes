import React from 'react';

const FilterOptions: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
  if (!isOpen) {
    return null;
  }

  return <div>FilterOptions</div>;
};

export default FilterOptions;
