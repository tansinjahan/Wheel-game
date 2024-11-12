import { Wheels } from './Wheels';
import { Participants } from './Participants';
import { Header } from './Header';
import { Questions } from './Questions';
import './App.css';
import { GameSection } from './styles';

const MAX_PARTICIPANTS = 15;
const participant_lists: string[] = ['tithy', 'shishir', 'ihram'];

function App() {
  return (
    <>
      <div className="app-container">
        <Header />
        <Questions />
      </div>
      <GameSection>
        <Participants name={participant_lists}></Participants>
        <Wheels
          maxParticipants={MAX_PARTICIPANTS}
          listOfParticipants={participant_lists}
        />
      </GameSection>
    </>
  );
}

export default App;
