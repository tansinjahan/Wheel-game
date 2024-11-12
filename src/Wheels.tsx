import { FC } from 'react';

interface WheelsProp {
  maxParticipants: number;
  listOfParticipants: string[];
}

export const Wheels: FC<WheelsProp> = ({ Props }) => {
  return <h2>This is for wheel</h2>;
};
