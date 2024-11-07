import React, { useState } from 'react';
import { FiBellOff } from 'react-icons/fi';
import styled from 'styled-components';

const InputContainer = styled.input`
  width: 100%;
  min-height: 40px;
  display: flex;
  background-color: aliceblue;
  color: black;
  justify-items: center;
  font-size: x-large;
  cursor: pointer;
  &:hover {
    background-color: beige;
  }
`;

const QuestionContainer = styled.h1`
  font-weight: 100;
  width: 100%;
  min-height: 40px;
  background-color: beige;
  color: black;
  padding: 0;
`;

export const Questions = () => {
  const [edit, setEdit] = useState(true);
  const [question, setQuestion] = useState('Write your question??');

  const handleClick = (e: React.KeyboardEvent) => {
    return e.key === 'Enter' || e.key === 'esc'
      ? setEdit(false)
      : setEdit(true);
  };

  return (
    <div>
      {edit ? (
        <InputContainer
          ref={(input) => input && input.focus()}
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyDown={handleClick}
        ></InputContainer>
      ) : (
        <QuestionContainer>{question}</QuestionContainer>
      )}
    </div>
  );
};
