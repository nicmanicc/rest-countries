import { useEffect, useState } from 'react';
import { CountryContainer } from './components/CountryContainer';
import './App.css';
import { TitleBar } from './components/TitleBar';
import { SearchBar } from './components/SearchBar';
import { Filter } from './components/Filter';

function App() {
  const [countries, setCountries] = useState([]);
  const [searchedCountry, setSearchedCountry] = useState('');
  const [filteredCountry, setFilteredCountry] = useState('');
  const fetchCountries = () => {
    fetch('./data.json')
      .then((response) => response.json())
      .then((data) => setCountries(data));
  };

  const onSearchCountry = (event) => {
    setSearchedCountry(event.target.value);
  };

  const onFilteredCountry = (event) => {
    setFilteredCountry(event.target.value);
  };

  const getFilteredCountries = () => {
    return countries.filter((country) => {
      // Search filter - check if search term is empty or matches country name
      const matchesSearch =
        !searchedCountry ||
        country.name.toLowerCase().startsWith(searchedCountry.toLowerCase());

      // Region filter - check if filter is empty or matches country region
      const matchesRegion =
        !filteredCountry ||
        country.region.toLowerCase() === filteredCountry.toLowerCase();

      // Both conditions must be true
      return matchesSearch && matchesRegion;
    });
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <div className="App">
      <TitleBar />
      <div className="filterInputs">
        <SearchBar
          onSearchCountry={onSearchCountry}
          searchedCountry={searchedCountry}
        />
        <Filter
          onFilteredCountry={onFilteredCountry}
          filteredCountry={filteredCountry}
        />
      </div>

      <div className="countriesWrapper">
        {countries &&
          getFilteredCountries().map((country, key) => {
            return <CountryContainer key={key} country={country} />;
          })}
      </div>
    </div>
  );
}

export default App;
