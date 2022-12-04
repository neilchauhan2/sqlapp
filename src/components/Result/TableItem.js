import React from 'react';

const TableItem = ({data}) => {
  const keys = Object.keys(data);
  const values = keys.map((key) => data[key]);

  return (
    <React.Fragment>
      {values.map((value) => (
        <td>{value}</td>
      ))}
    </React.Fragment>
  );
};

export default TableItem;
