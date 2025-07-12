import React from 'react'
import './Navbar.css' // Assuming you have a CSS file for styling
const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="navbar-logo">
          MyRecipes 
        </div>
        <ul className="navbar-links">
           <li> <a href="/">Home</a></li>
            <li> <a href="">Recipes</a></li>
            <li> <a href="">Categories</a></li>
            <li> <a href="">Reviews</a></li>
        </ul>

        <div className="navbar-auth">
            <button className="login-button">Login</button>
            <button className="signup-button">Sign Up</button>
        </div>
    </nav>
  )
}

export default Navbar