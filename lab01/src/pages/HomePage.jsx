import React, { useContext } from 'react';
import AppContext from '../data/AppContext';
import PersonProfile from '../components/PersonProfile.jsx';
import viteLogo from '/vite.svg';
import reactLogo from '../assets/react.svg';

function HomePage() {
  const { items } = useContext(AppContext); 

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

      <div>
        {items
          .filter(person => person.name && person.birth && person.eyes && person.registration)
          .map((person) => (
            <PersonProfile key={person.id} person={person} />
          ))
        }
      </div>

      <p className="read-the-docs"></p>
    </div>
  );
}

export default HomePage;
