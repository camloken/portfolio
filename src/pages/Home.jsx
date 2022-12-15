import React from 'react'
import { useNavigate } from 'react-router-dom'
import WaterMaterApp from '../assets/water-meter1.svg'
import FertilityApp from '../assets/fertility3.svg'

function Home() {
  const navigate = useNavigate()
  return (
    <div className="flex-column flex-align-center fade-in">
      <section id="intro" className="intro-text">
        <h3>Hello, I'm Cam Loken.</h3>
        <p className="block-text">
          I'm a UX/UI designer and I'm passionate about creating meaningful experiences. Oh, and I love to write code too.
        </p>
      </section>
      <section id="work" className="max-width">
        <h4 className="subheader text-center">My Work</h4>
        <div className="grid-wrap">
          <div
            role="presentation"
            className="grid-item water-meter-app bg-purple1"
            onClick={() => navigate('/water-meter-app')}
          >
            <div className="grid-item-description">
              <h4>Water Meter App</h4>
              <p>A mobile app for the City of Calgary's water meter management.</p>
              <button className="grid-button">View Project</button>
            </div>
            <img className="grid-image" src={WaterMaterApp} alt="water meter mobile app" />
          </div>
          <div
            role="presentation"
            className="grid-item fertility-app"
            onClick={() => navigate('/fertility-app')}
          >
            <div className="grid-item-description">
              <h4>Fertility Clinic</h4>
              <p>A tablet and desktop app for managing the Fertility Clinic patients.</p>
              <button className="grid-button">View Project</button>
            </div>
            <img className="grid-image" src={FertilityApp} alt="fertility clinic app" />
          </div>
          <div className="grid-item" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Coming Soon</div>
          <div className="grid-item" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Coming Soon</div>
          <div className="grid-item" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Coming Soon</div>
          <div className="grid-item" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Coming Soon</div>
        </div>
      </section>
      <section id="contact">
        <h4 className="subheader text-center">Contact Me</h4>
      </section>
    </div>
  )
}

export default Home
