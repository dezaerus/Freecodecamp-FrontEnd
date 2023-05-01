const root = ReactDOM.createRoot(document.getElementById("root"));
const useState = React.useState;

const App = () => {
  const [text, setText] = useState("");
  const handleClick = (e) => {
    if (
      e.target.value !== "=" &&
      e.target.value !== "AC" &&
      e.target.value + text != "00" &&
      e.target.value + text[text.length - 1] != ".."
    ) {
      setText(() => [...text, e.target.value]);
    } else if (e.target.value === "=") {
      setText([`${eval(text.join(""))}`]);
    } else if (e.target.value == "AC") {
      setText("");
    }
  };

  return (
    <div className="container position-absolute top-50 start-50 translate-middle">
      <div className="card">
        <div className="card-header" id="display">
          <h1>{text != "" ? text : 0}</h1>
        </div>
        <div className="card-body">
          <div>
            <div>
              <button
                onClick={handleClick}
                style={{ width: 160 }}
                className="btn"
                id="clear"
                value="AC"
              >
                AC
              </button>
              <button
                onClick={handleClick}
                className="btn"
                id="divide"
                value="/"
              >
                /
              </button>
              <button
                onClick={handleClick}
                className="btn"
                id="multiply"
                value="*"
              >
                X
              </button>
            </div>
            <div>
              <button
                onClick={handleClick}
                className="btn"
                id="seven"
                value="7"
              >
                7
              </button>
              <button
                onClick={handleClick}
                className="btn"
                id="eight"
                value="8"
              >
                8
              </button>
              <button onClick={handleClick} className="btn" id="nine" value="9">
                9
              </button>
              <button
                onClick={handleClick}
                className="btn"
                id="subtract"
                value="-"
              >
                -
              </button>
            </div>
            <div>
              <button onClick={handleClick} className="btn" id="four" value="4">
                4
              </button>
              <button onClick={handleClick} className="btn" id="five" value="5">
                5
              </button>
              <button onClick={handleClick} className="btn" id="six" value="6">
                6
              </button>
              <button onClick={handleClick} className="btn" id="add" value="+">
                +
              </button>
            </div>
            <div>
              <button onClick={handleClick} className="btn" id="one" value="1">
                1
              </button>
              <button onClick={handleClick} className="btn" id="two" value="2">
                2
              </button>
              <button
                onClick={handleClick}
                className="btn"
                id="three"
                value="3"
              >
                3
              </button>
              <button
                onClick={handleClick}
                className="btn"
                id="equals"
                value="="
              >
                =
              </button>
              <button
                onClick={handleClick}
                style={{ width: 240 }}
                className="btn"
                id="zero"
                value="0"
              >
                0
              </button>
              <button
                onClick={handleClick}
                className="btn"
                id="decimal"
                value="."
              >
                .
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
root.render(<App />);