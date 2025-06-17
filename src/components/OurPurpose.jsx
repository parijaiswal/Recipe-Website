import React from 'react'
import './OurPurpose.css'
import purposeImage from '../assets/ourpurposimage.jpg'; // Ensure the image path is correct

const OurPurpose = () => {
  return (
    <section className="ourpurpose">
      <div className="purpose-text">
        <h2 className="main-heading">Our Purpose</h2>
      <h3 className="sub-heading">Rediscover the Taste of Tradition</h3>
      <p className="des">Our purpose is to celebrate and promote Indian cuisine and its diverse flavors through this platform, helping people reconnect with their roots one recipe at a time.
        We believe that food is more than of what it looks like and what it tastes like it is celebration of flavors,emotions, stories and culture.
        By sharing the recipes of our country, we try to bring the  <span>Zaika Jo Bhool Gaye The</span> back to the people.
      </p>
      </div>
      <div className="purpose-image">
            <img src={purposeImage} alt="Delicious food" />
        </div>
    </section>
  )
}

export default OurPurpose