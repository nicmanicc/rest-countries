export const CountryContainer = ({ country }) => {
  return (
    <div className="countryContainer">
      <div className="flagWrapper">
        <img src={country.flag} alt="country flag" />
      </div>
      <div className="countryDescription">
        <h3>{country.name}</h3>
        <p>
          <span style={{ fontWeight: 'bold' }}>Population:</span>{' '}
          {country.population}
        </p>
        <p>
          <span style={{ fontWeight: 'bold' }}>Region:</span> {country.region}
        </p>
        <p>
          <span style={{ fontWeight: 'bold' }}>Capital:</span> {country.capital}
        </p>
      </div>
    </div>
  );
};
