import React from 'react'
import './RecipeCard.css'

const RecipeCard = ({image,title,region,description})=>{

  return (
    <div className="recipe-card">
        <img src={image} alt={title} />
        <div className="recipe-content">
            <h3>{title}</h3>

            <p className="region">{region}</p>
            <p className="description">{description}</p>
            <button className="view-recipe-btn">View Recipe</button>
        </div>
    </div>

  );
};

export default RecipeCard