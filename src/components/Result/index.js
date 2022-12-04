import React from 'react';
import {v4 as uuidv4} from 'uuid';
import {useRecoilValue} from 'recoil';
import {resultState} from '../../atoms';
import styles from './styles.module.scss';
import TableItem from './TableItem';

const Result = () => {
  const data = useRecoilValue(resultState);

  return (
    <div className={styles.container}>
      {data.length > 0 && (
        <table>
          <tbody>
            <tr>
              {Object.keys(data[0]).map((item) => (
                <th key={uuidv4()}>{item}</th>
              ))}
            </tr>
            {data.map((customer) => (
              <tr key={uuidv4()}>
                <TableItem data={customer} />
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {data.length === 0 && (
        <div className={styles.placeholder}>
          <span>Your Results will appear here.</span>
        </div>
      )}
    </div>
  );
};

export default Result;
