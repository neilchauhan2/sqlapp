import React from 'react';
import customers from '../../data/customers.json';
import styles from './styles.module.scss';
import TableItem from './TableItem';

function Result() {
  // console.log(customers);
  const keys = Object.keys(customers);
  return (
    <div className={styles.container}>
      <div className={styles.tableHeader}>
        {Object.keys(customers[0]).map((item) => (
          <span>{item}</span>
        ))}
      </div>
      {customers.map((customer, index) => (
        <TableItem key={index} data={customer} keys={keys} />
      ))}
    </div>
  );
}

export default Result;
