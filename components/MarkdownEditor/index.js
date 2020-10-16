import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import css from './style.css';
import marked from 'marked';

function MarkdownEditor({ file, write }) {
  const [value, setValue] = useState('');

  useEffect(() => {
    (async () => {
      setValue(await file.text());
    })();
  }, [file]);

  function markdown(value) {
    let rawMarkdown = marked(value);
    return { __html: rawMarkdown };
  }

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
      <h3>Markdown Editor</h3>
      <p>{file.name}</p>
      <form
        onSubmit={e => {
          e.preventDefault();
          updateFile();
        }}
      >
        <div className={css.container}>
          <textarea
            rows="4"
            cols="40"
            palceholder="Enter markdown"
            value={value}
            onChange={e => setValue(e.target.value)}
          />
          <div dangerouslySetInnerHTML={markdown(value)}></div>
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

MarkdownEditor.propTypes = {
  file: PropTypes.object,
  write: PropTypes.func
};

export default MarkdownEditor;
