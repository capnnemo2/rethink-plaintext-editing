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
    const isPeriod = element => element === '.';
    let varName = Array.from(file.name);
    const endName = varName.findIndex(isPeriod);
    varName = varName.slice(1, endName).join('');

    const newFile = new File([value], file.name, {
      type: file.type,
      lastModified: new Date()
    });

    write(newFile);
  }

  return (
    <div className={css.editor}>
      <h3>Plain Text Editor</h3>
      <p>File name: {file.name}</p>
      <form
        onSubmit={e => {
          e.preventDefault();
          updateFile();
        }}
      >
        <textarea
          name="text_value"
          value={value}
          onChange={e => setValue(e.target.value)}
          rows="4"
          cols="40"
        />
        <br />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

PlaintextEditor.propTypes = {
  file: PropTypes.object,
  write: PropTypes.func
};

export default PlaintextEditor;
