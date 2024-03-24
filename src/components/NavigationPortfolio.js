//import logo from './logo.svg';
//import './HeaderPortfolio.css';
import React, { useState, useEffect } from 'react';

function NavigationPortfolio(props) {
    const [activeMenu, setActiveMenu] = useState('');
  
    return (
      <div className="NavigationPortfolio">
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target="#myNavbar"
              >
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">
                Diana Santacruz
              </a>
            </div>
            <div className="collapse navbar-collapse" id="myNavbar">
              <ul className="nav navbar-nav navbar-right">
                <li className={activeMenu === 'AboutMe' || activeMenu === '' ? 'highlight-nav' : ''}>
                  <a
                    href="#"
                    onClick={() => {
                      console.log('testing onClick of AboutMe');
                      setActiveMenu('AboutMe');
                      props.showComponent('AboutMe');
                    }}
                  >
                    About Me
                  </a>
                </li>
                <li
                  className={activeMenu === 'WorkPortfolio' ? 'highlight-nav' : ''}
                >
                  <a
                    href="#"
                    onClick={() => {
                      console.log('testing onClick of WorkPortfolio');
                      setActiveMenu('WorkPortfolio');
                      props.showComponent('WorkPortfolio');
                    }}
                  >
                    Portfolio
                  </a>
                </li>
                <li
                  className={activeMenu === 'Contact' ? 'highlight-nav' : ''}
                >
                  <a
                    href="#"
                    onClick={() => {
                      console.log('testing onClick of Contact');
                      setActiveMenu('Contact');
                      props.showComponent('Contact');
                    }}
                  >
                    Contact
                  </a>
                </li>
                <li className={activeMenu === 'Resume' ? 'highlight-nav' : ''}>
                  <a
                    href="#"
                    onClick={() => {
                      console.log('testing onClick of Resume');
                      setActiveMenu('Resume');
                      props.showComponent('Resume');
                    }}
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
  
  export default NavigationPortfolio;