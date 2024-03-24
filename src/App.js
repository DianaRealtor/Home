import logo from './logo.svg';
import './App.css';
import HeaderPortfolio from './components/HeaderPortfolio';
import FooterPortfolio from './components/FooterPortfolio';
import ProjectPortfolio from './components/ProjectPortfolio';
import React, { useState, useEffect } from 'react';
import AboutMe from './components/AboutMe';

function App() {

  const [componentToShow, setComponentToShow] = useState(null);

  const showComponent = (component) => {
    setComponentToShow(component);
  };

  // Set default component to display if componentToShow is null
  useEffect(() => {
    if (!componentToShow) {
      setComponentToShow('AboutMe');
    }
  }, [componentToShow]);

  return (
    <div className="App">
      <HeaderPortfolio showComponent={showComponent} />
      <ProjectPortfolio componentToShow={componentToShow} />
      <FooterPortfolio/>
    </div>
  );
}

export default App;
