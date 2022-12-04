import React from 'react';
import styles from './styles.module.scss';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <span>SQLApp</span>
      <i className="fa-solid fa-database" />
    </div>
  );
};

export default Navbar;
