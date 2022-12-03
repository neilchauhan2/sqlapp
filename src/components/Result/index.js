import React from 'react';
import customers from '../../data/customers.json';
import styles from './styles.module.scss';

function Result() {
  console.log(customers);
  return (
    <div className={styles.container}>
      <h1>Result Section</h1>
    </div>
  );
}

export default Result;
