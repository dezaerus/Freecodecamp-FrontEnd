const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
  const handleKeyDown = (e) => {
    const pads = document.querySelectorAll(".clip");
    pads.forEach((pad) => {
      if (pad.id == e.key.toUpperCase()) {
        pad.play();
        document.getElementById("display").innerHTML = pad.parentNode.id;
      }
    });
  };
  const handleClick = (e) => {
    e.target.firstChild.play();
    document.getElementById("display").innerHTML = e.target.id;
  };
  const useEffect = React.useEffect;
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return (
    <div
      className="container position-absolute top-50 start-50 translate-middle"
      id="drum-machine"
    >
      <div className="card">
        <div className="card-body mx-auto">
          <div>
            <div
              id="Heater 1"
              onClick={handleClick}
              className="btn btn-secondary drum-pad shadow"
            >
              <audio
                className="clip"
                id="Q"
                src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
              ></audio>
              Q
            </div>
            <div
              id="Heater 2"
              onClick={handleClick}
              className="btn btn-secondary drum-pad shadow"
            >
              <audio
                className="clip"
                id="W"
                src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
              ></audio>
              W
            </div>
            <div
              id="Heater 3"
              onClick={handleClick}
              className="btn btn-secondary drum-pad shadow"
            >
              <audio
                className="clip"
                id="E"
                src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
              ></audio>
              E
            </div>
          </div>
          <div>
            <div
              id="Heater 4"
              onClick={handleClick}
              className="btn btn-secondary drum-pad shadow"
            >
              <audio
                className="clip"
                id="A"
                src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
              ></audio>
              A
            </div>
            <div
              id="Clap"
              onClick={handleClick}
              className="btn btn-secondary drum-pad shadow"
            >
              <audio
                className="clip"
                id="S"
                src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
              ></audio>
              S
            </div>
            <div
              id="Open-HH"
              onClick={handleClick}
              className="btn btn-secondary drum-pad shadow"
            >
              <audio
                className="clip"
                id="D"
                src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
              ></audio>
              D
            </div>
          </div>
          <div>
            <div
              id="Kick-n'-Hat"
              onClick={handleClick}
              className="btn btn-secondary drum-pad shadow"
            >
              <audio
                className="clip"
                id="Z"
                src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
              ></audio>
              Z
            </div>
            <div
              id="Kick"
              onClick={handleClick}
              className="btn btn-secondary drum-pad shadow"
            >
              <audio
                className="clip"
                id="X"
                src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
              ></audio>
              X
            </div>
            <div
              id="Closed-HH"
              onClick={handleClick}
              className="btn btn-secondary drum-pad shadow"
            >
              <audio
                className="clip"
                id="C"
                src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
              ></audio>
              C
            </div>
          </div>
        </div>
        <div id="display" className="card-footer mx-auto font-weight-bold">
          Drum Machine
        </div>
      </div>
    </div>
  );
};

root.render(<App />);
