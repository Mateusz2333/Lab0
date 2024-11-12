import React, { useContext } from 'react';
import PersonProfile from '../components/PersonProfile.jsx';
import viteLogo from '/vite.svg';
import reactLogo from '../assets/react.svg';
import FlexLayout from '../layouts/FlexLayout.jsx';

function HomePage() {
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

      
      <FlexLayout element={PersonProfile} />

      <p className="read-the-docs"></p>
    </div>
  );
}

export default HomePage;