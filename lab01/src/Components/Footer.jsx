import React from 'react';

function Footer() {
  return (
    <footer style={{ backgroundColor: "#f8f9fa", padding: "1rem", textAlign: "center" }}>
      <div>
        <img src="../public/images.png" alt="Logo uczelni" style={{ height: "50px" }} />
      </div>
      <div>
        <p>© 2024 WSEI Kraków</p>
        <p>Email: twoj-email@example.com</p>
      </div>
    </footer>
  );
}

export default Footer;
