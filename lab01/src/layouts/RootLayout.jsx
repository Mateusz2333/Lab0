import React from 'react';
import NavBarMenu from '../components/NavBarMenu';
import Footer from '../components/Footer';

function RootLayout({ children }) {
  const menuItems = [
    { id: 1, label: 'Home' },
    { id: 2, label: 'Laboratorium 1' },
    { id: 3, label: 'Laboratorium 2' },
  ];

  return (
    <div>
      <NavBarMenu items={menuItems} />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default RootLayout;
