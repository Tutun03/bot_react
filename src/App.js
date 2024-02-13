import React from 'react';
import './App.css'; // Assuming you have a CSS file for styling
import LandbotIntegration from './LandbotIntegration'; // Import the LandbotIntegration component

// Navbar component
const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item"><a href="#home">Home</a></li>
        <li className="navbar-item"><a href="#about">About</a></li>
        <li className="navbar-item"><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

// Footer component
const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2024 Your Company</p>
    </footer>
  );
};

// App component
const App = () => {
  return (
    <div>
      <Navbar />
      <div className="content">
        {/* Your main content here */}
        <h1 id="home">Welcome to My Website</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <h2 id="about">About Us</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <h2 id="contact">Contact Us</h2>
        <p>Email: info@example.com</p>
      </div>
      <Footer />
      <LandbotIntegration /> {/* Include LandbotIntegration component here */}
    </div>
  );
};

export default App;
