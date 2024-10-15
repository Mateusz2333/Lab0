import React from 'react';
import { data } from '../module-data.js'; 
import PersonProfile from './Components/PersonProfile'; 
import viteLogo from '/vite.svg'; 
import reactLogo from './assets/react.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'; 

function App() {
  return (
    <div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Profile osób</h1>
      
      <div>
        {data
          .filter(person => person.name && person.birth && person.eyes && person.registration) 
          .map((person) => (
            <PersonProfile key={person.id} person={person} />
          ))
        }
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
