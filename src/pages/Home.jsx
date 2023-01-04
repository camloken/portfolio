import React from 'react'
import { useNavigate } from 'react-router-dom'
import WaterMeterApp from '../assets/water-meter1.svg'
import FertilityApp from '../assets/fertility3.svg'
import MuseApp from '../assets/muse5.png'
import ChatApp from '../assets/chat1.png'
import SecureMail from '../assets/securemail3.svg'
import DSM from '../assets/dsm4.png'
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
            <img className="grid-image" src={WaterMeterApp} alt="water meter mobile app" />
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
          <div
            role="presentation"
            className="grid-item chat-app"
            onClick={() => navigate('/chat-app')}
          >
            <div className="grid-item-description">
              <h4>Secure Chat</h4>
              <p>A mobile app for sending secure texts within a healthcare network.</p>
              <button className="grid-button">View Project</button>
            </div>
            <img className="grid-image" src={ChatApp} alt="secure chat mobile app" />
          </div>
          <div
            role="presentation"
            className="grid-item secure-mail"
            onClick={() => navigate('/secure-mail')}
          >
            <div className="grid-item-description">
              <h4>Secure Health Exchange</h4>
              <p>A web app for sending secure emails for healthcare workers.</p>
              <button className="grid-button">View Project</button>
            </div>
            <img className="grid-image" src={SecureMail} alt="Mock of secure mail app" />
          </div>
          <div
            role="presentation"
            className="grid-item data-manager"
          >
            <div className="grid-item-description">
              <h4>Prism Data Manager</h4>
              <p>An interface for creating custom data sets.</p>
              <button className="grid-button">Coming Soon</button>
            </div>
            <img className="grid-image" src={DSM} alt="dsm interface" />
          </div>
        </div>
      </section>
      <section className="max-width text-center mb-100">
        <h4 id="skills" className="subheader text-center">Skills</h4>
        <div className="skills-grid">
          <ProgressBar percent={100} title="UI Design" />
          <ProgressBar percent={100} title="UX Engineering" />
          <ProgressBar percent={100} title="Prototyping" />
          <ProgressBar percent={100} title="Visual Design" />
          <ProgressBar percent={90} title="Design Systems" />
          <ProgressBar percent={90} title="Figma" />
          <ProgressBar percent={90} title="HTML/CSS" />
          <ProgressBar percent={85} title="React" />
          <ProgressBar percent={85} title="Javascript" />
          <ProgressBar percent={80} title="Adobe CS" />
          <ProgressBar percent={75} title="Affinity Suite" />
          <ProgressBar percent={30} title="User Research" />
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
