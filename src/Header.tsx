import { FC } from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #282c34;
  min-height: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: x-large;
  color: white;
`;

export const Header: FC = () => (
  <HeaderContainer>
    <h1>Wheel of Names</h1>
  </HeaderContainer>
);