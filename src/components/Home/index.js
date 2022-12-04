import React from 'react';
import {useRecoilState, useRecoilValue} from 'recoil';
import {codeState, resultState} from '../../atoms';
import customers from '../../data/customers.json';
import Editor from '../Editor';
import Result from '../Result';
import styles from './styles.module.scss';

const Home = () => {
  const query = useRecoilValue(codeState);
  const [, setResult] = useRecoilState(resultState);

  const handleQuery = () => {
    console.log(query);
    if (query === 'SELECT * FROM customers;') {
      setResult(customers);
    }

    if (query === 'SELECT country FROM customers;') {
      const res = customers.map((customer) => {
        return {
          country: customer.country,
        };
      });
      setResult(res);
    }

    if (query === 'SELECT * FROM customers WHERE country="Germany";') {
      const res = customers.filter(
        (customer) => customer.country === 'Germany'
      );
      setResult(res);
    }

    if (query === 'SELECT COUNT (country) FROM customers;') {
      setResult([
        {
          Count: customers.length,
        },
      ]);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.editorSection}>
        <Editor />
        <button onClick={handleQuery}>Run Query</button>
      </div>
      <Result />
    </div>
  );
};

export default Home;
