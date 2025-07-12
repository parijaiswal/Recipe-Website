import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import RecipeCard from '../components/RecipeCard';
import './SouthIndianRecipes.css';

const southIndianRecipes = [
  {
    image: './src/assets/Riceidli.jpg',
    title: 'Idli',
    region: 'Tamil Nadu',
    description: 'A soft, steamed rice cake served with chutney and sambar.'
  },
  {
    image: './src/assets/masaladosa.jpg',
    title: 'Masala Dosa',
    region: 'Karnataka',
    description: 'A crispy rice crepe filled with spicy potato masala.'
  },

  {
    image: './src/assets/pongal image.jpg',
    title: 'Sweet Pongal',
    region: 'Tamil Nadu',
    description: 'A sweet rice dish made with jaggery and flavored with cardamom.'
  },

  {
    image: './src/assets/Paniyaram.jpg',
    title: 'Paniyarams',
    region: 'Tamil Nadu',
    description: 'A savory rice dumpling, often served with chutney.'
  },
  // Add more recipes...
];
const SouthIndianRecipes = () => {
  return (
    <>
      <Navbar />

      <div className="southindian-container">

        {/* Section 1 - Title */}
        <h1 className="page-title">South Indian Recipes</h1>
        <p className="page-subtitle">Explore the flavors from the southern states of India!</p>

        {/* Section 2 - Popular Recipes */}
        <section className="recipe-section">
          <h2>Popular Recipes</h2>
          <div className="recipe-grid">
            {southIndianRecipes.map((recipe, index) => (
              <RecipeCard key={index} {...recipe} />
            ))}
          </div>
        </section>

        {/* Section 3 - Dadi/ Nani ki Recipes */}
       <section className="grandma-section">
  <div className="grandma-content">
    <div className="grandma-image">
      <img src="./src/assets/south_indian_lady.jpg" alt="Dadi cooking" />
    </div>
    <div className="grandma-text">
      <h2>Dadi/Nani ki Recipes</h2>
      <p>
        Relive the traditional flavors passed down through generations.
        Discover recipes filled with warmth, memories, and timeless taste.
      </p>
      <button>View Recipes</button>
    </div>
  </div>
</section>

      </div>

      <Footer />
    </>
  )
}

export default SouthIndianRecipes