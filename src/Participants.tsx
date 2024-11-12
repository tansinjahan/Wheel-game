import { FC } from 'react';
import { ParticipantTitle } from './styles';

interface names {
  children?: React.ReactNode;
  name: string[];
}

export const Participants: FC<names> = ({ names }) => {
  return (
    <>
      <ParticipantTitle>Add Participant</ParticipantTitle>
    </>
  );
};
