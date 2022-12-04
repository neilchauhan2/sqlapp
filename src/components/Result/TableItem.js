import React from 'react';
import {v4 as uuidv4} from 'uuid';

const TableItem = ({data}) => {
  const keys = Object.keys(data);
  const values = keys.map((key) => data[key]);

  return (
    <React.Fragment>
      {values.map((value) => (
        <td key={uuidv4()}>{value}</td>
      ))}
    </React.Fragment>
  );
};

export default TableItem;
