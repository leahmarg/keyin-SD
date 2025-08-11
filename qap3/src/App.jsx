import { useState, useEffect } from "react";
import Neighbours from "./Neighbors";

function App() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    fetch(
      "https://restcountries.com/v3.1/all?fields=name,capital,flags,borders,cca3"
    ).then(async (data) => {
      const json = await data.json();
      setCountries(json);
    });
  }, []);

  function setLetter(letter) {
  const filtered = countries.filter((country) => {
    for (let code of country.borders || []) {
      const neighbour = countries.find((c) => c.cca3 === code);
      if (neighbour && neighbour.name.common.startsWith(letter)) {
        return true;
      }
    }
    return false;
  });

  const result = filtered.map((country) => {
    const borderNames = (country.borders || []).map((code) => {
      const neighbour = countries.find((c) => c.cca3 === code);
      return neighbour ? neighbour.name.common : code;
    });
    return { ...country, borders: borderNames };
  });

  setFilteredCountries(result);
}

  return (
    <div className="App">
      <h1>Neighbouring Countries</h1>
      <button onClick={() => setLetter("A")}>
        NEIGHBOURS STARTING WITH A
      </button>
      <button onClick={() => setLetter("I")}>
        NEIGHBOURS STARTING WITH I
      </button>

      <Neighbours countries={filteredCountries} />
    </div>
  );
}

export default App;
