import React from 'react';
import customers from '../../data/customers.json';
import styles from './styles.module.scss';
import TableItem from './TableItem';

function Result() {
  // console.log(customers);
  const keys = Object.keys(customers);
  return (
    <div className={styles.container}>
      <table>
        <tr>
          {Object.keys(customers[0]).map((item) => (
            <th>{item}</th>
          ))}
        </tr>
        {customers.map((customer, index) => (
          <tr>
            <TableItem key={index} data={customer} keys={keys} />
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Result;
