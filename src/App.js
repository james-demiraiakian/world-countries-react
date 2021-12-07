import './App.css';
import React, { useEffect, useState } from 'react';
import { getCountries } from './services/countries';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import CountryTile from './components/CountryTile/CountryTile';

function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getCountries();
    };
    fetchData();
  }, []);
  return (
    <div className="Main">
      <Header />
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
