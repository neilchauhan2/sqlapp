import React, {useState} from 'react';
import {useRecoilState} from 'recoil';
import {codeState, dropdownSelectState} from '../../atoms';
import styles from './styles.module.scss';

const QueryDropdown = () => {
  const [selectedValue, setSelectedValue] = useRecoilState(dropdownSelectState);
  const [toggle, setToggle] = useState(false);
  const [, setQuery] = useRecoilState(codeState);

  const handleClick = (e) => {
    setSelectedValue(e.target.innerText);
    setQuery(e.target.innerText);
    setToggle(false);
  };

  return (
    <div className={styles.container}>
      {selectedValue.length > 0 && (
        <span
          className={styles.selectedValue}
          onClick={() => setToggle(!toggle)}
        >
          {selectedValue}
        </span>
      )}
      {selectedValue.length === 0 && (
        <span className={styles.placeholder} onClick={() => setToggle(!toggle)}>
          Click here to select a sample query.
        </span>
      )}
      {toggle && (
        <div className={styles.dropdownOptions}>
          <span onClick={handleClick}>SELECT * FROM customers;</span>
          <span onClick={handleClick}>SELECT country FROM customers;</span>
          <span onClick={handleClick}>
            SELECT * FROM customers WHERE country="Germany";
          </span>
          <span onClick={handleClick}>
            SELECT COUNT (country) FROM customers;
          </span>
        </div>
      )}
    </div>
  );
};

export default QueryDropdown;
