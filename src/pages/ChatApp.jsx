import React from 'react'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import Mock1 from '../assets/chat1.png'
import Mock2 from '../assets/chat2.png'
import Mock3 from '../assets/chat3.png'
import Mock4 from '../assets/chat4.png'
import Mock5 from '../assets/chat5.png'
import Mock6 from '../assets/chat6.png'
import Mock7 from '../assets/chat7.png'
import Mock8 from '../assets/chat8.png'
import Mock9 from '../assets/chat9.png'

function ChatApp() {
  return (
    <div className="jumbo-page fade-in chat-app">
      <div className="jumbo-feature bg-blue1">
        <div className="jumbo-content max-width-800">
          <div className="jumbo-description">
            <div>
              <h3>Secure Chat</h3>
              <p>A mobile app for sending secure texts within a healthcare network.</p>
            </div>
          </div>
          <img className="jumbo-image" src={Mock1} alt="water meter mobile app" />
        </div>
      </div>
      <div className="flex-column flex-align-center">
        <section className="text-section">
          <h3 className="blue1">Project Background</h3>
          <p>In response to a need identified by healthcare practitioners, the Secure Chat app was created to provide
            medical professionals a secure means of communication. The chat app allowed subscribers of Secure-Mail to quickly
            collaborate with other health care professionals. Chat channels focused primarily on patient treatments. 
          </p>
          <h6>My Role and Responsibilities:</h6>
          <ul>
            <li>Stakeholder meetings</li>
            <li>Designing high fidelity mockups</li>
            <li>Front-end development with React Native</li>
          </ul>
        </section>
        <section className="text-section">
          <h3 className="blue1">Stakeholder Meetings</h3>
          <h6>Stakeholder meetings were conducted within the company in order to:</h6>
          <ul>
            <li>Gain insights and understanding about various user types</li>
            <li>Prioritize which features to include for a minimum viable product</li>
            <li>Align the design with the company brand (BrightSquid)</li>
          </ul>
        </section>
        <section className="text-section">
          <h3 className="blue1">Design Implementation</h3>
          <p>After gaining insight from the company stakeholders, we decided that the app would be 
            initially designed for mobile use. Doctors and healthcare practitioners would be the main users.
            The primary features of the app were then prioritized and design work began.
          </p>
          <h6>I proceeded to work on:</h6>
          <ul>
            <li>Creating wireframes and basic layouts</li>
            <li>Designing detailed mockups to illustrate the look and feel of each screen </li>
            <li>Writing front-end code in React Native to ensure design quality</li>
          </ul>
        </section>
        <section className="graphic-block silver">
          <div className="mobile-grid">
            <div className="mobile-grid-item">
              <Zoom zoomMargin={30}><img src={Mock1} alt="water meter app mock 1" /></Zoom>
            </div>
            <div className="mobile-grid-item">
              <Zoom zoomMargin={30}><img src={Mock2} alt="water meter app mock 2" /></Zoom>
            </div>
            <div className="mobile-grid-item">
              <Zoom zoomMargin={30}><img src={Mock3} alt="water meter app mock 3" /></Zoom>
            </div>
            <div className="mobile-grid-item">
              <Zoom zoomMargin={30}><img src={Mock4} alt="water meter app mock 4" /></Zoom>
            </div>
            <div className="mobile-grid-item">
              <Zoom zoomMargin={30}><img src={Mock5} alt="water meter app mock 5" /></Zoom>
            </div>
            <div className="mobile-grid-item">
              <Zoom zoomMargin={30}><img src={Mock6} alt="water meter app mock 6" /></Zoom>
            </div>
            <div className="mobile-grid-item">
              <Zoom zoomMargin={30}><img src={Mock7} alt="water meter app mock 6" /></Zoom>
            </div>
            <div className="mobile-grid-item">
              <Zoom zoomMargin={30}><img src={Mock8} alt="water meter app mock 6" /></Zoom>
            </div>
            <div className="mobile-grid-item">
              <Zoom zoomMargin={30}><img src={Mock9} alt="water meter app mock 6" /></Zoom>
            </div>

          </div>
        </section>
        <section className="text-section mb-100">
          <h3 className="blue1">Final Thoughts</h3>
          <p>While working with the company BrightSquid, I had many opportunities to both design and develop products. 
            The primary focus of my role there was to ensure that products were not only designed with the user in mind,
            but also that nothing was lost in translation between design and code execution. This app gave me an opportunity
            to use React Native and learn a new technology I hadn't tried before. 
          </p>
        </section>
      </div>
    </div>
  )
}

export default ChatApp
