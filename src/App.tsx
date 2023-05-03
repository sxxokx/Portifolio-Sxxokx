import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HeaderPortfolio } from './components/header/header';
import { About } from './components/about/about';
import { Projects } from './components/projects/projects';
import { Contact } from './components/contact/contact';


function App() {
  return (
    <div className="App">
      <HeaderPortfolio></HeaderPortfolio>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
}

export default App;
