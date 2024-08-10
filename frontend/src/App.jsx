import React from 'react';
import {Routes, Route} from "react-router-dom";
import HomePage from './pages/HomePage'
import VelocityPage from './pages/VelocityPage'
import ForcePage from './pages/ForcePage'
import PowerPage from './pages/PowerPage'
import BackendTest from './BackendTest'

const App = () => {
  return (
    <>
    {/* <BackendTest /> */}
    <h1 className='has-text-white has-text-weight-bold'>Maya's Physics Calculator!</h1>
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
