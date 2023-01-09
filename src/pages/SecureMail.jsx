import React from 'react'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import Mock1 from '../assets/securemail1.svg'
import Mock2 from '../assets/securemail2.svg'
import Mock3 from '../assets/securemail3.svg'
import Mock4 from '../assets/securemail4.svg'
import Mock5 from '../assets/securemail5.svg'
import Mock6 from '../assets/securemail6.svg'
import Mock7 from '../assets/securemail7.svg'
import Mock8 from '../assets/securemail8.svg'

function SecureMail() {
  return (
    <div className="jumbo-page fade-in secure-mail">
      <div className="jumbo-feature bg-blueish">
        <div className="jumbo-content">
          <div className="jumbo-description">
            <div>
              <h3>Secure Health Exchange</h3>
              <p>A web app for sending secure emails within the healthcare industry.</p>
            </div>
          </div>
          <img className="jumbo-image" src={Mock1} alt="Mock of secure Mail" />
        </div>
      </div>
      <div className="flex-column flex-align-center">
        <section className="text-section">
          <h3 className="blueish">Project Background</h3>
          <p>I worked for a company called BrightSquid who's primary focus was a product called Secure-Mail 
            (later named Secure Health Exchange). A major concern in the healthcare industry is patient privacy,
            but much more than that, HIPAA compliance is a requirement. Gmail does not comply with these standards
            so many healthcare practitioners are unable to easily communicate via email. Secure Health Exchange offered
            a way for practitioners to communicate and share documents in a safe and compliant manner. 
          </p>
          <h6>My role and responsibilities on this project included:</h6>
          <ul>
            <li>Team meetings and collaboration</li>
            <li>Provide user flow diagrams</li>
            <li>Analyze research in order to improve design usability</li>
            <li>Create wireframes and high fidelity mockups</li>
            <li>Provide frontend code and develop features for the app</li>
          </ul>
        </section>
        <section className="text-section">
          <h3 className="blueish">Team Meetings</h3>
          <h6>Team meetings were held regularly in order to:</h6>
          <ul>
            <li>Generate new ideas for features and improvements within the app</li>
            <li>Collaborate with stakeholders on feature prioritization</li>
            <li>Understand the technical restrictions and capabilities of the product</li>
            <li>Align the design according to the BrightSquid brand</li>
          </ul>
        </section>

        <section className="text-section">
          <h3 className="blueish">Design Refactoring</h3>
          <p>The intitial product had an inconsistent look and feel, and areas of the app were not intuitive. Various
            components needed to be refactored so that both the style and behaviour aligned throughout the app.
            This was an iterative process that happened over time, and gradually the product began to improve.
          </p>
          <h6>Some of the things I worked on were:</h6>
          <ul>
            <li>Redesigning the layout and interface to make it more intuitive</li>
            <li>Ensuring the features and components within the app were consistent</li>
            <li>Making small improvements to the app over time</li>
            <li>Providing high fidelity mockups to illustrate the look and feel of the app</li>
          </ul>
        </section>
        <section className="graphic-block silver">
          <div className="desktop-grid">
            <div className="desktop-grid-item">
              <Zoom zoomMargin={30}><img src={Mock1} alt="Secure Mail mock 1" /></Zoom>
            </div>
            <div className="desktop-grid-item">
              <Zoom zoomMargin={30}><img src={Mock2} alt="Secure Mail mock 2" /></Zoom>
            </div>
            <div className="desktop-grid-item">
              <Zoom zoomMargin={30}><img src={Mock3} alt="Secure Mail mock 3" /></Zoom>
            </div>
            <div className="desktop-grid-item">
              <Zoom zoomMargin={30}><img src={Mock4} alt="Secure Mail mock 4" /></Zoom>
            </div>
            <div className="desktop-grid-item">
              <Zoom zoomMargin={30}><img src={Mock5} alt="Secure Mail mock 5" /></Zoom>
            </div>
            <div className="desktop-grid-item">
              <Zoom zoomMargin={30}><img src={Mock6} alt="Secure Mail mock 6" /></Zoom>
            </div>
            <div className="desktop-grid-item">
              <Zoom zoomMargin={30}><img src={Mock7} alt="Secure Mail mock 7" /></Zoom>
            </div>
            <div className="desktop-grid-item">
              <Zoom zoomMargin={30}><img src={Mock8} alt="Secure Mail mock 8" /></Zoom>
            </div>
          </div>
        </section>
        <section className="text-section mb-100">
          <h3 className="blueish">Final Thoughts</h3>
          <p>I enjoyed my time at BrightSquid as it gave me an opportunity to solve problems in a creative 
            and iterative manner. The product not only served as an email app, but also as an exchange 
            in which healthcare professionals could network with each other in a secure and compliant way.
          </p>
        </section>
      </div>
    </div>
  )
}

export default SecureMail
