import './App.css';
import React, { useEffect, useState } from 'react';
import { getCountries } from './services/countries';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import CountryTile from './components/CountryTile/CountryTile';

function App() {
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState('');
  const [continent, setContinent] = useState('all');
  const [continents, setContinents] = useState('all');
  const [wait, setWait] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCountries();
      setCountries(data);
      const majorContinent = [...new Set(data.map((con) => con.continent))];
      setContinents(majorContinent);
      setTimeout(() => setWait(false), 2000);
    };
    fetchData();
  }, []);

  function searchCountries() {
    return countries.filter((country) => {
      return (
        country.name.includes(query) && (country.continent === continent || continent === 'all')
      );
    });
  }

  return (
    <div className="Main">
      <Header />
      <div className="search">
        <h3>Search</h3>
        <input
          type="text"
          value={query}
          placeholder="Search"
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <h3>Continent</h3>
        <select value={continent} onChange={(e) => setContinent(e.target.value)}>
          <option value=""></option>
        </select>
      </div>
      <div>
        {countries.map((country) => {
          return <CountryTile key={country.iso2} {...country} />;
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
