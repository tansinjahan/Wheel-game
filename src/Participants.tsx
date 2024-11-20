import { FC } from 'react';
import {
  ParticipantTitle,
  ParticipantContainer,
  InputNameContainer,
  InputName,
  Button,
  PlayContainer,
} from './styles';

interface names {
  children?: React.ReactNode;
  name: string[];
}

export const Participants: FC<names> = ({ names }) => {
  return (
    <ParticipantContainer>
      <ParticipantTitle>Add Participant</ParticipantTitle>
      <InputNameContainer>
        <InputName type="text" placeholder="Enter a name"></InputName>
        <Button type="submit">ADD</Button>
      </InputNameContainer>
      <ParticipantTitle>Participant</ParticipantTitle>
      <PlayContainer>
        <Button type="submit">Sort</Button>
        <Button type="submit" style={{ marginRight: '10px' }}>
          Shuffle
        </Button>
      </PlayContainer>
    </ParticipantContainer>
  );
};
