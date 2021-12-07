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
      console.log(data);
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
        country.name.toLowerCase().includes(query.toLowerCase()) &&
        (country.continent === continent || continent === 'all')
      );
    });
  }

  function setDirection(e) {
    if (e === 'alphabetical') {
      console.log(countries);
      countries.name.sort();
    } else {
      countries.name.sort().reverse();
    }
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
          <option value="all">All</option>
          <option value="">N/A</option>
          <option value="Africa">Africa</option>
          <option value="Antarctica">Antarctica</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="North America">North America</option>
          <option value="South America">South America</option>
          <option value="Oceania">Oceania</option>
        </select>
        <h3>Sort</h3>
        <select value="" onChange={(e) => setDirection(e.target.value)}>
          <option value=""> </option>
          <option value="alphabetical">Alphabetical</option>
          <option value="reverseAlphabetical">Reverse Alphabetical</option>
        </select>
      </div>
      <div>
        {searchCountries().map((c) => (
          <CountryTile key={c.iso2} {...c} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
