import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import RecipeCard from '../components/RecipeCard';
import './SouthIndianRecipes.css';


const SouthIndianRecipes = () => {
  return (
    <>
      <Navbar />
      <div className="south-indian-page">
        <section className="hero-section">
          <h1>South Indian Recipes</h1>
          <p>Discover the flavors of South India where every food tells a story and every meal is a pack of health.</p>
          <div className="hero-image">
            <img src="./src/assets/south_hero_image.jpg" alt="South Hero image" />
            
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default SouthIndianRecipes