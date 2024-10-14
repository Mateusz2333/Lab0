import { useState } from 'react';
import reactLogo from './assets/react.svg';
import 'bootstrap/dist/css/bootstrap.css';
import viteLogo from '/vite.svg';
import './App.css';
import PersonProfile from './Components/PersonProfile';
import { data } from '../data'; 

function App() {
  return (
    <>
      <h1>Profile osób</h1>
      <div className="profiles">
        {data.map((person) => (
          <PersonProfile key={person.id} person={person} />
        ))}
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
