import React, { useEffect, useState } from 'react';
import {Routes, Route, Switch} from "react-router-dom";
import HomePage from './pages/HomePage'
import VelocityPage from './pages/VelocityPage'
import ForcePage from './pages/ForcePage'
import PowerPage from './pages/PowerPage'

const App = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/members');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const jsonData = await response.json();
        setData(jsonData);
      }
      catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  if (error) return <div>Error: {error}</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <>
        <h1 className='has-text-white'>Data from API</h1>
        <p className='has-text-white'>{JSON.stringify(data, null, 2)}</p>
      <Routes>
        <Route path="/static" element={<HomePage />}/>
        <Route path="/static/velocity" element={<VelocityPage />}/>
        <Route path="/static/force" element={<ForcePage />}/>
        <Route path="/static/power" element={<PowerPage />}/>
      </Routes>
    </>
  );
};

export default App;
