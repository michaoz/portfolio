import React from 'react';
import logo from './logo.svg';
import './style/App.css';

function App() {
  return (
    <div>
        <header>
            <nav className="header-menu">
                <ul>
                    <li className="list-items">About</li>
                    <li className="list-items">Projects</li>
                    <li className="list-items">Skills</li>
                    <li className="list-items">Contact</li>
                    <li className="list-items">Languages</li>
                </ul>
            </nav>
            <nav className="mobile-header-menu">
                <ul>
                    <li className="list-items">About</li>
                    <li className="list-items">Projects</li>
                    <li className="list-items">Skills</li>
                    <li className="list-items">Contact</li>
                    <li className="list-items">Languages</li>
                </ul>
            </nav>
            <div className="header-vertical-sector"></div>
            <div className="header-horizontal-sector"></div>
            <div className="header-content">
                <p>Hello. My name is</p>
                <h1>Michiko Aozasa / Mia.</h1>
                <h3>A Full-Stack Developer / Engineer</h3>
            </div>
        </header>
        <main>
        </main>    
    </div>
  );
}

export default App;
