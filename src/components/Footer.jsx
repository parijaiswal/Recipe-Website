import React from 'react'
import './Footer.css'; // Assuming you have a CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section brand">
        <h2>Zaika Jo Bhool Gaye The</h2>
        <p>Rediscovering the taste of tradition, one recipe at a time.</p>
      </div>

      <div className="footer-section links">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#recipes">Recipes</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

      <div className="footer-section social">
        <h3>Connect With Us</h3>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
        <a href="https://youtube.com" target="_blank" rel="noreferrer">YouTube</a>
        <a href="mailto:info@example.com">Email</a>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Zaika Jo Bhool Gaye The. All rights reserved.</p>
      </div>
    </footer>

  )
}

export default Footer