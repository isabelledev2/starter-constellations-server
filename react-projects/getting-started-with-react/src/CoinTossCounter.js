function CoinTossCounter() {
    const [results, setResults] = useState([]);
    const handleClick = (value) => setResults([...results, value]);
    const [counts, setCounts] = useState({ H: 0, T: 0 });
  
    const lis = results.map((result, index) => (
      <li key={`toss-${index}`}>{result === "H" ? "Heads" : "Tails"}</li>
    ));
    return (
      <section>
        <div>
          <button onClick={() => handleClick("H")}>Heads</button>
          <button onClick={() => handleClick("T")}>Tails</button>
        </div>
        <ul>{lis}</ul>
      </section>
    );
};

const handleClick = (value) => {
    setResults([...results, value]);
    setCounts({
      ...counts,
      [value]: counts[value] + 1,
    });
  };

  const handleDeleteLast = () => {
    const last = results[results.length - 1];
    const list = results.slice(0, -1);
  
    setResults(list);
    if (last) {
      setCounts({
        ...counts,
        [last]: counts[last] - 1,
      });
    }
  };

  export default CoinTossCounter; 