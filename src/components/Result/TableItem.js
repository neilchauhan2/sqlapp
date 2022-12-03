import React from 'react';
import styles from './styles.module.scss';
const TableItem = ({data}) => {
  const keys = Object.keys(data);
  const values = keys.map((key) => data[key]);
  return (
    <div className={styles.tableItemContainer}>
      {values.map((value) => (
        <span>{value}</span>
      ))}
    </div>
  );
};

export default TableItem;
