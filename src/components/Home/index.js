import React from 'react';
import Editor from '../Editor';
import Result from '../Result';
import styles from './styles.module.scss';

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.editorSection}>
        <Editor />
        <button>Run Query</button>
      </div>
      <Result />
    </div>
  );
}

export default Home;
