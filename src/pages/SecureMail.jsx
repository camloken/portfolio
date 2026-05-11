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
      <div className="jumbo-feature bg-purplish">
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
          <h3 className="purplish">Project Background</h3>
          <p>I worked for a company called BrightSquid, whose primary product was Secure-Mail (later rebranded as Secure Health
            Exchange). A key concern in the healthcare industry is patient privacy; however, beyond that, HIPAA compliance is a
            strict requirement. Standard email providers such as Gmail do not meet these regulatory standards, making it
            difficult for many healthcare practitioners to communicate securely. Secure Health Exchange provided a compliant
            platform that enabled healthcare professionals to communicate and securely share documents in a safe, regulated manner. 
          </p>
          <h6>My role and responsibilities on this project included:</h6>
          <ul>
            <li>Participating in team meetings and cross-functional collaboration</li>
            <li>Creating user flow diagrams to support feature planning and design direction</li>
            <li>Analyzing research findings to improve overall usability and user experience</li>
            <li>Developing wireframes and high-fidelity mockups</li>
            <li>Contributing frontend code and implementing application features</li>
          </ul>
        </section>
        <section className="text-section">
          <h3 className="purplish">Team Meetings</h3>
          <h6>Team meetings were held regularly in order to:</h6>
          <ul>
            <li>Generate new ideas for features and improvements within the app</li>
            <li>Collaborate with stakeholders on feature prioritization</li>
            <li>Understand the technical restrictions and capabilities of the product</li>
            <li>Align the design according to the BrightSquid brand</li>
          </ul>
        </section>

        <section className="text-section">
          <h3 className="purplish">Design Refactoring</h3>
          <p>The initial product had an inconsistent look and feel, and several areas of the application were not intuitive.
            Various components needed to be refactored so that both the styling and behavior were consistent across the product.
            This was an iterative process that took place over time, with the product gradually improving through ongoing
            refinements.
          </p>
          <h6>Some of the areas I worked on included:</h6>
          <ul>
            <li>Redesigning layouts and interface elements to improve intuitiveness</li>
            <li>Ensuring consistency across features and components within the application</li>
            <li>Making incremental improvements to the product over time</li>
            <li>Producing high-fidelity mockups to communicate the intended look and feel of the application</li>
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
          <h3 className="purplish">Final Thoughts</h3>
          <p>I enjoyed my time at BrightSquid, as it provided an opportunity to solve problems in a creative 
          and iterative manner. The product not only functioned as an email application, but also as a secure, 
          compliant platform enabling healthcare professionals to network and communicate with one another.
          </p>
        </section>
      </div>
    </div>
  )
}

export default SecureMail
