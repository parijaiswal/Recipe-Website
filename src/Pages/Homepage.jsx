import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import ExploreSection from '../components/ExploreSection'
import HiddenRecipe from '../components/HiddenRecipe'
import OurPurpose from '../components/OurPurpose'
import Footer from '../components/Footer'

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <ExploreSection />
      <HiddenRecipe />
      <OurPurpose />
      <Footer />
    </div>
  )
}

export default Homepage