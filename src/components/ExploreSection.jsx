import React from 'react'
import './ExploreSection.css' 
import { Link } from 'react-router-dom';
const ExploreSection = () => {
  return (
    <section id="explore" className="explore-section">
      <h2>Explore the recipes by Region</h2>
      <div className="region-cards">
        <div className="card">
          <img src="./src/assets/south_indian_image.jpg" alt="" />
          <h3>South Indian</h3>
          <Link to="/south-indian">
            <button>View Recipes</button>
          </Link>
        </div>


        <div className="card">
          <img src="./src/assets/north_indian_image.jpg" alt="" />
          <h3>North Indian</h3>
          <button>View Recipes</button>
        </div>

        <div className="card">
          <img src="./src/assets/east_indian_image.jpeg" alt="" />
          <h3>East Indian</h3>
          <button>View Recipes</button>
        </div>

        <div className="card">
          <img src="./src/assets/west_indian_food.jpg" alt="" />
          <h3>West Indian</h3>
          <button>View Recipes</button>
        </div>

      </div>
    </section>
  )
}

export default ExploreSection