import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import css from './style.css';

const marked = require('marked');

function MarkdownEditor({ file, write }) {
  const [value, setValue] = useState('');
  // console.log(file, write);

  useEffect(() => {
    (async () => {
      setValue(await file.text());
    })();
  }, [file]);

  function markdown(value) {
    let rawMarkdown = marked(value);
    return { __html: rawMarkdown };
  }

  return (
    <div className={css.editor}>
      <h3>Markdown Editor</h3>
      <p>{file.name}</p>
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
    </div>
  );
}

MarkdownEditor.propTypes = {
  file: PropTypes.object,
  write: PropTypes.func
};

export default MarkdownEditor;
