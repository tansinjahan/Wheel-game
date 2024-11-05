import React, { useState } from 'react';
import { FiBellOff } from 'react-icons/fi';

export const Questions = () => {
  const [edit, setEdit] = useState(true);
  const [question, setQuestion] = useState('Write your question??');

  const handleClick = (value) => {
    console.log('hr', value);
    return edit === true ? setQuestion(value) : setEdit(false);
  };

  return (
    <div>
      {edit ? (
        <input
          ref={(input) => input && input.focus()}
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        ></input>
      ) : (
        <label>nothing to show</label>
      )}
    </div>
  );
};
