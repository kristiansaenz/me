import React, { Component } from 'react';
import logo from './logo.svg';
import Main from './components/Main';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Portfolio from './components/Portfolio';
import ContactMe from './components/ContactMe';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Main />
          <logo />
          <Navbar/>
          <AboutMe />          
          <Skills />
          <Experience />
          <Education />
          <Portfolio />
          <ContactMe />
      </div>
    );
  }
}

export default App;
