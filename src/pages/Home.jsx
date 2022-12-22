import React from 'react'
import { useNavigate } from 'react-router-dom'
import WaterMaterApp from '../assets/water-meter1.svg'
import FertilityApp from '../assets/fertility3.svg'
import MuseApp from '../assets/muse5.png'
import ContactForm from '../ContactForm'
import ProgressBar from '../ProgressBar'

function Home() {
  const navigate = useNavigate()
  return (
    <div className="flex-column flex-align-center fade-in">
      <section id="home" className="intro-text">
        <h3>Hello, I'm Cam Loken.</h3>
        <p className="block-text">
          I'm a UX/UI designer and I'm passionate about creating meaningful experiences. 
          I love to write code, and yes, I even built this website.
        </p>
      </section>
      <section id="work" className="max-width mb-100">
        <div className=" text-center">
          <h4 className="subheader">My Work</h4>
        </div>
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
          <div
            role="presentation"
            className="grid-item muse-app"
            onClick={() => navigate('/muse-app')}
          >
            <div className="grid-item-description">
              <h4>Muse App</h4>
              <p>A web app for analyzing energy investments.</p>
              <button className="grid-button">View Project</button>
            </div>
            <img className="grid-image" src={MuseApp} alt="Muse app" />
          </div>
          <div className="grid-item" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Coming Soon</div>
          <div className="grid-item" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Coming Soon</div>
          <div className="grid-item" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Coming Soon</div>
        </div>
      </section>
      <section className="max-width text-center mb-100">
        <h4 id="skills" className="subheader text-center">Skills</h4>
        <div className="skills-grid">
          <ProgressBar percent={100} title="UI Design" />
          <ProgressBar percent={100} title="UX Engineering" />
          <ProgressBar percent={100} title="Prototyping" />
          <ProgressBar percent={100} title="Visual Design" />
          <ProgressBar percent={90} title="HTML/CSS" />
          <ProgressBar percent={80} title="React" />
          <ProgressBar percent={80} title="Javascript" />
          <ProgressBar percent={75} title="Design Systems" />
          <ProgressBar percent={75} title="Figma" />
          <ProgressBar percent={70} title="Adobe CS" />
          <ProgressBar percent={70} title="Affinity Suite" />
          <ProgressBar percent={25} title="User Research" />
        </div>
      </section>
      <section id="contact">
        <h4 className="subheader text-center">Contact Me</h4>
      </section>
      <ContactForm />
    </div>
  )
}

export default Home
