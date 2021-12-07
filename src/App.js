import './App.css';
import React, { useEffect, useState } from 'react';
import { getCountries } from './services/countries';

function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getCountries();
      console.log(data);
    };
    fetchData();
  }, []);
  return <div className="App"></div>;
}

export default App;
