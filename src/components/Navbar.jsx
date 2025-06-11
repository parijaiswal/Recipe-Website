import React from 'react'
import './Navbar.css' // Assuming you have a CSS file for styling
const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="navbar-logo">
          MyRecipes 
        </div>
        <ul className="navbar-links">
            <li>Home</li>
            <li>Recipes</li>
            <li>Categories</li>
            <li>Reviews</li>
        </ul>

        <div className="navbar-auth">
            <button className="login-button">Login</button>
            <button className="signup-button">Sign Up</button>
        </div>
    </nav>
  )
}

export default Navbar