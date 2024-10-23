import React from 'react';

function Footer() {
  return (
    <footer style={{ backgroundColor: "#f8f9fa", padding: "1rem", textAlign: "center" }}>
      <div>
        <img src="/public/images.png" alt="WSEI Logo" style={{ height: "70px" }} />
      </div>
      <div>
        <p>© 2024 WSEI Kraków</p>
        <p>Email: mateusz.nowak1@microsoft.wsei.edu.pl</p>
      </div>
    </footer>
  );
}

export default Footer;
