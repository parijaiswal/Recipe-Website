import React from 'react'
import HomePage from './Pages/Homepage'
import SouthIndianRecipes from './Pages/SouthIndianRecipes';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/south-indian" element={<SouthIndianRecipes />} />
      </Routes>
    </Router>
  )
}

export default App