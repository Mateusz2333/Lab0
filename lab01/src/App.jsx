import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RootLayout from './layouts/RootLayout.jsx'; 
import HomePage from './pages/HomePage.jsx'; 
import Home from './pages/Home.jsx'
import Laboratorium1 from './pages/Laboratorium1.jsx'; 
import Laboratorium2 from './pages/Laboratorium2.jsx'; 

import { data } from './data/module-data.js';  
import PersonProfile from './components/PersonProfile.jsx'; 
import viteLogo from '/vite.svg'; 
import reactLogo from './assets/react.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'; 

function App() {
  return (
    <Router>
      <RootLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<Home />} /> 
          <Route path="/lab1" element={<Laboratorium1 />} />
          <Route path="/lab2" element={<Laboratorium2 />} />
        </Routes>
      </RootLayout>
    </Router>
  );
}

export default App;
