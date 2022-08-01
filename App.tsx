import * as React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { PlayerEvent } from '@lottiefiles/react-lottie-player/dist/src/Player';

export const App = () => {
  const handleEventPlayer = (e: PlayerEvent) => {
    if (e === 'load') alert('Lottie-load');
  };

  const Playerref = React.useRef<Player>(null);
  const [toggle, setToggle] = React.useState(true);
  const [action, setAction] = React.useState(false);

  return (
    <div className="container">
      <h1>A maid on her way to serve the dish!</h1>

      <div className="container">
        {toggle && (
          <button
            onClick={() => {
              Playerref.current.pause();

              setAction(true);
              setToggle(false);
            }}
          >
            Stop her!
          </button>
        )}

        {action && (
          <button
            onClick={() => {
              Playerref.current.play();
              setToggle(true);
              setAction(false);
            }}
          >
            Let her walk!
          </button>
        )}
      </div>

      <Player
        src="https://assets8.lottiefiles.com/packages/lf20_pkghem0h.json"
        className="player"
        loop
        autoplay
        speed={1}
        background=""
        direction={1}
        style={{ width: '60', height: '60' }}
        // onEvent={handleEventPlayer}
        ref={Playerref}
      />
    </div>
  );
};

export default App;
