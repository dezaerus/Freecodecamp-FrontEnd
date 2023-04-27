const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
  const [randomQuote, setRandomQuote] = React.useState({});
  const [quotes, setQuotes] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://api.quotable.io/quotes/random?limit=30"
      );
      const data = await response.json();
      setQuotes(data);
      setRandomQuote(data[Math.floor(Math.random() * 30)]);
    };
    fetchData();
  }, []);
  
  const newRandomQuote = () => {
    setRandomQuote(quotes[Math.floor(Math.random() * 30)]);
  };
  const tweet = `https://twitter.com/intent/tweet?${randomQuote.content}, ${randomQuote.author}`;
  return (
    <div className="container position-absolute top-50 start-50 translate-middle">
      <div className="card">
        <div className="card-body" id="quote-box">
          <div id="quote">
            {randomQuote ? (
              <>
                <h5 className="card-title" id="text">
                  "{randomQuote.content}"
                </h5>
                <p className="card-text" id="author">
                  - {randomQuote.author}
                </p>
              </>
            ) : (
              <h3 className="card-title">wait</h3>
            )}
          </div>
          <div>
            <button
              id="new-quote"
              className="btn btn-primary m-3 rounded-5"
              onClick={newRandomQuote}
            >
              New Quote
            </button>
            <a
              id="tweet-quote"
              href={tweet}
              target="_blank"
              className="btn btn-danger  m-3 rounded-5"
            >
              <i class="fa fa-twitter" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

root.render(<App />);
