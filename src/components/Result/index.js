import React from 'react';
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
                <th key={item}>{item}</th>
              ))}
            </tr>
            {data.map((customer, index) => (
              <tr>
                <TableItem key={customer[0]} data={customer} />
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Result;
