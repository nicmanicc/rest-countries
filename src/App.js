import { useEffect, useState } from 'react';
import './App.css';

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

  return <div className="App"></div>;
}

export default App;
