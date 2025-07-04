import React from 'react'
import RecipeCard from './RecipeCard.jsx'
import './HiddenRecipe.css'

const recipes = [
    {
        image: './src/assets/Bhaat_ki_daal.webp',
        title: 'Bhatt ki churkani',
        region: 'Himachal Pradesh',
        description: 'A rich, iron-packed curry made with black soybeans native to the hills.'
  },
  {
    image: './src/assets/Chak_Hoa_Kheer.jpg',
    title: 'Chak Hao Kheer',
    region: 'Manipur',
    description: 'A creamy kheer made using aromatic black rice from the northeast.'
  },
  {
    image: './src/assets/Khali_Gajjar_Hwala.jpg',
    title: 'Kali Gajjar Halwa',
    region: 'UP[Lucknow]',
    description: 'A winter special recipe using black/purple carrots.'
  },
  {
    image: './src/assets/Gujarati_Fajeto.jpg',
    title: 'Gujarati Fajeto',
    region: 'Gujarat',
    description: 'A spiced mango-based kadhi made during summers.'
  }
];
const HiddenRecipe = () => {
  return (
    <section className="unkhane-section">
      <h2>Unkhane Swad Bharat Ke</h2>
      <p id="description">Discover regional Indian recipes that are hidden gems of their culture.</p>
      <div className="recipe-grid">
        {recipes.map((item, index) => (
          <RecipeCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default HiddenRecipe