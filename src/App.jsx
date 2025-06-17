import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import ExploreSection from './components/ExploreSection'
import HiddenRecipe from './components/HiddenRecipe'
import OurPurpose from './components/OurPurpose'
const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <ExploreSection />
      <HiddenRecipe />
      <OurPurpose />
    </div>
  )
}

export default App