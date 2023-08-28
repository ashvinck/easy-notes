import React from 'react';
import styles from './index.module.css';
import Searchbar from './searchbar';
import NavbarLinks from './navbarLinks';

const Header: React.FC = () => {
  return (
    <div className={styles.actions}>
      {/* ------ Search Input ----- */}
      <Searchbar />
      {/* ------ Navbar Links ------- */}
      <NavbarLinks />
    </div>
  );
};

export default Header;
