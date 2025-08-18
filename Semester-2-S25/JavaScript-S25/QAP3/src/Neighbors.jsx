import './Neighbours.css'

function Neighbours({ countries }) {

  function formatBorders(borders) {
    const result = borders.join(", ");
    return result
  }

  return (
    <div className="neighbours">
      {countries.map((country) => (
        <div key={country.name.common} className="country-card">
          <div className='flag-container'>
            <img src={country.flags.svg} alt={`Flag of ${country.name.common}`} />
          </div>
          <div className="name-container">  
            <h2>{country.name.common}</h2>
          </div>
          <div className="country-capital">
            <h3>Capital</h3>
            {country.capital && <p>{country.capital[0]}</p>}
          </div>
          <div className="country-neighbours">
            <h2>Neighbours</h2>
            <p>{formatBorders(country.borders)}</p> 
          </div>
        </div>
      ))}
    </div>
  );
}

export default Neighbours;