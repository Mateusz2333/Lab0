import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RootLayout from './layouts/RootLayout.jsx'; 
import HomePage from './pages/HomePage.jsx'; 
import Home from './pages/Home.jsx'
import Laboratorium1 from './pages/Laboratorium1.jsx'; 
import Laboratorium2 from './pages/Laboratorium2.jsx'; 
import wseiLogo from '/images.png';
import NotFound from './pages/NotFound';


import { data } from './data/module-data.js';  
import PersonProfile from './components/PersonProfile.jsx'; 
import viteLogo from '/vite.svg'; 
import reactLogo from './assets/react.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'; 

const menuItems = [
  { id: 1, label: "Strona Główna", url: "/", urlPattern: "/", element: <HomePage /> },  
  { id: 2, label: "Home", url: "/home", urlPattern: "/home", element: <Home /> },  
  { id: 3, label: "Laboratorium 1", url: "/lab1", urlPattern:"/lab1", element: <Laboratorium1 /> },
  { id: 4, label: "Laboratorium 2", url: "/lab2", urlPattern:"lab2", element: <Laboratorium2 /> },
  
];

function App() {
  return (
    <>
      <RootLayout items={menuItems}>
        <Routes>
          {menuItems.map((item) => (
            <Route key={item.id} path={item.urlPattern} element={item.element} />
          ))}
          <Route path="/*" element={<NotFound />} /> 
        </Routes>
      </RootLayout>
    </>
  );
}


export default App;
