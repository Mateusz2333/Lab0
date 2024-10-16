import React from 'react';
import NavBarMenu from './components/NavBarMenu';
import Footer from './components/Footer';

const menuItems = [
  { id: 1, label: "Home" },
  { id: 2, label: "Laboratorium 1" },
  { id: 3, label: "Laboratorium 2" },
];

function RootLayout({ children }) {
  return (
    <div>
      <NavBarMenu items={menuItems} />
      <div style={{ minHeight: '80vh' }}>
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default RootLayout;
