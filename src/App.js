import { useEffect, useState } from 'react';
import { CountryContainer } from './components/CountryContainer';
import './App.css';
import { TitleBar } from './components/TitleBar';

function App() {
  const [countries, setCountries] = useState([]);
  const fetchCountries = () => {
    fetch('./data.json')
      .then((response) => response.json())
      .then((data) => setCountries(data));
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <div className="App">
      <TitleBar />
      <div className="countriesWrapper">
        {countries &&
          countries.map((country, key) => {
            return <CountryContainer key={key} country={country} />;
          })}
      </div>
    </div>
  );
}

export default App;
