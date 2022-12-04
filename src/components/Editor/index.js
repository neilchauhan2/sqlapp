import React from 'react';
import {useRecoilState} from 'recoil';
import CodeEditor from '@uiw/react-textarea-code-editor';
import {codeState} from '../../atoms';

function Editor() {
  const [code, setCode] = useRecoilState(codeState);
  return (
    <div>
      <CodeEditor
        value={code}
        language="sql"
        placeholder={`Write your SQL Queries here 👇 \nSupported Queries (Please make sure syntax is same as below)\n\n- SELECT * FROM customers;\n- SELECT country FROM customers;\n- SELECT * FROM customers WHERE country="Germany"\n- SELECT COUNT (country) FROM customers\n\nStuck?\nTry Selecting a sample Query\nfrom the dropdown below\nand click Run Query;`}
        onChange={(evn) => setCode(evn.target.value)}
        padding={15}
        style={{
          height: '53vh',
          width: '50vw',
          fontSize: 16,
          backgroundColor: '#f5f5f5',
          borderRadius: '4px',
          boxShadow:
            'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',
          fontFamily:
            'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
        }}
      />
    </div>
  );
}

export default Editor;
