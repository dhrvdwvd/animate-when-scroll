import { Animator, ScrollContainer, ScrollPage, Sticky, Fade, MoveOut, MoveIn, batch} from 'react-scroll-motion';
import './App.css';

function App() {
  return (
    <ScrollContainer>
      <ScrollPage page={0}>
        <Animator animation={batch(Sticky(), Fade(), MoveOut(0,-200))}>
          <div className="card"><p className="card-text">Scroll down! 🙂</p></div>
        </Animator>
      </ScrollPage>

      <ScrollPage page={1}>
        <Animator animation={batch(Sticky(), Fade(), MoveIn(0, 200), MoveOut(0,-200))}>
          <div className="card"><p className="card-text">Good! Keep going.</p></div>
        </Animator>
      </ScrollPage>

      <ScrollPage page={2}>
        <Animator animation={batch(Sticky(), Fade(), MoveIn(0, 200), MoveOut(0,-200))}>
          <div className="card"><p className="card-text">Almost there</p></div>
        </Animator>
      </ScrollPage>

      <ScrollPage page={3}>
        <Animator animation={batch(Sticky(), Fade(), MoveIn(0, 200), MoveOut(0,-200))}>
          <div className="card"><p className="card-text">Done🤓 Now scroll up</p></div>
        </Animator>
      </ScrollPage>
    </ScrollContainer>
  );
}

export default App;
