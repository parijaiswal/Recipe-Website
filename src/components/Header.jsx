import React from 'react'
import './Header.css'
import Logo from '../assets/header food image.jpg'

const Header = () => {
  return (
    <section className="header">
      <div className="header-text">
        <h1>Welcome to MyRecipes Where Every Recipe Tells a Story!</h1>
        <p>From the sizzling tandoor of North India
             to the aromatic spice blends of the South, food is more than just nourishment—it’s a celebration of tradition, creativity, and shared moments.
        </p>
        <button>Explore Recipes</button>
      </div>
        <div className="header-image">
            <img src={Logo} alt="Delicious food" />
        </div>
      </section>
  )
}

export default Header