import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import css from './style.css';

function PlaintextEditor({ file, write }) {
  const [value, setValue] = useState('');

  useEffect(() => {
    (async () => {
      setValue(await file.text());
    })();
  }, [file]);

  function updateFile() {
    console.log('file: ', file);
    // console.log('file: ', file.text());

    console.log('updated text: ', value);
    // write(file);
  }

  return (
    <div className={css.editor}>
      <h3>Plain Text Editor</h3>
      <p>File name: {file.name}</p>
      <form
        onSubmit={e => {
          e.preventDefault();
          updateFile();
          write(e.target.text_value.value);
        }}
      >
        <input
          type="text"
          value={value}
          name="text_value"
          onChange={e => setValue(e.target.value)}
          size="50"
        />
        <button type="submit">Change Text</button>
      </form>
    </div>
  );
}

PlaintextEditor.propTypes = {
  file: PropTypes.object,
  write: PropTypes.func
};

export default PlaintextEditor;
