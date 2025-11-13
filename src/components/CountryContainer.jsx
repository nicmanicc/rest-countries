export const CountryContainer = ({ country }) => {
  return (
    <div className="countryContainer">
      <div className="flagWrapper">
        <img src={country.flag} alt="country flag" />
      </div>
      <div className="countryDescription">
        <h3>{country.name}</h3>
        <p>Population: {country.population}</p>
        <p>Region: {country.region}</p>
        <p>Capital: {country.capital}</p>
      </div>
    </div>
  );
};
