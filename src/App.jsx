import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import ExploreSection from './components/ExploreSection'
import HiddenRecipe from './components/HiddenRecipe'
const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <ExploreSection />
      <HiddenRecipe />
    </div>
  )
}

export default App