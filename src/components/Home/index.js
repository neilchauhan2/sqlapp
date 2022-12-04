import React from 'react';
import {useRecoilState} from 'recoil';
import {codeState, dropdownSelectState, resultState} from '../../atoms';
import customers from '../../data/customers.json';
import Editor from '../Editor';
import QueryDropdown from '../Editor/QueryDropdown';
import Result from '../Result';
import styles from './styles.module.scss';

const Home = () => {
  const [query, setQuery] = useRecoilState(codeState);
  const [, setResult] = useRecoilState(resultState);
  const [, setDropdownSelectedVal] = useRecoilState(dropdownSelectState);

  const handleQuery = () => {
    console.log(query);
    if (query === 'SELECT * FROM customers;') {
      setResult(customers);
    } else if (query === 'SELECT country FROM customers;') {
      const res = customers.map((customer) => {
        return {
          country: customer.country,
        };
      });
      setResult(res);
    } else if (query === 'SELECT * FROM customers WHERE country="Germany";') {
      const res = customers.filter(
        (customer) => customer.country === 'Germany'
      );
      setResult(res);
    } else if (query === 'SELECT COUNT (country) FROM customers;') {
      setResult([
        {
          Count: customers.length,
        },
      ]);
    } else
      setResult([
        {
          Message:
            'Please enter a Valid Query, refer the Editor for Supported Queries or, Select a Sample Query from the Dropdown below.',
        },
      ]);
  };

  const handleClear = () => {
    setResult([]);
    setQuery('');
    setDropdownSelectedVal('');
  };

  return (
    <div className={styles.container}>
      <div className={styles.editorSection}>
        <Editor />
        <div className={styles.buttons}>
          <QueryDropdown />
          <button onClick={handleQuery}>Run Query</button>
          <button onClick={handleClear} className={styles.clearButton}>
            Clear
          </button>
        </div>
      </div>
      <Result />
    </div>
  );
};

export default Home;
