import React from 'react';
import styles from './styles.module.scss';
const TableItem = ({data}) => {
  const keys = Object.keys(data);
  const values = keys.map((key) => data[key]);
  return (
    <React.Fragment className={styles.tableItemContainer}>
      {values.map((value) => (
        <td>{value}</td>
      ))}
    </React.Fragment>
  );
};

export default TableItem;
