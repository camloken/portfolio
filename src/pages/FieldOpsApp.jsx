import React from 'react'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import Mock1 from '../assets/fieldops1.webp'
import Mock2 from '../assets/fieldops2.webp'
import Mock3 from '../assets/fieldops3.webp'
import Mock4 from '../assets/fieldops4.webp'
import Mock5 from '../assets/fieldops5.webp'
import Mock6 from '../assets/fieldops6.webp'
import Mock7 from '../assets/fieldops7.webp'
import Mock8 from '../assets/fieldops8.webp'
import Mock9 from '../assets/fieldops9.webp'

function FieldOpsApp() {
  return (
    <div className="jumbo-page fade-in chat-app">
      <div className="jumbo-feature bg-purple2">
        <div className="jumbo-content max-width-800">
          <div className="jumbo-description">
            <div>
              <h3>Field Ops App</h3>
              <p>A mobile app designed for field operators working in the oil and gas industry.</p>
            </div>
          </div>
          <img className="jumbo-image" src={Mock1} alt="water meter mobile app" />
        </div>
      </div>
      <div className="flex-column flex-align-center">
        <section className="text-section">
          <h3 className="purple2">Project Background</h3>
          <p>This project involved a redesign of an existing application used by field operators in their day-to-day responsibilities.
              To meet oil and gas compliance standards, regular inspections must be conducted on wells, equipment, and facilities.
              Field Ops enables operators to complete these inspections in offline environments when necessary, with data efficiently synchronized to the server once connectivity is restored for auditing purposes.
              The application was owned by AbaData and was white-labeled for individual companies, with support for both light and dark display modes.
          </p>
          <h6>My Role and Responsibilities:</h6>
          <ul>
            <li>Conduct regular stakeholder meetings</li>
            <li>Collaborate with the development team</li>
            <li>Facilitate requirements gathering sessions</li>
            <li>Design high-fidelity mockups</li>
            <li>Ensure designs adhere to iOS and Android guidelines</li>
          </ul>
        </section>
        <section className="text-section">
          <h3 className="purple2">Stakeholder & Development Team Collaboration</h3>
          <h6>Collaborative planning sessions were conducted to:</h6>
          <ul>
            <li>Gain insights into client feature requests and business requirements</li>
            <li>Prioritize features based on monetization opportunities and business objectives</li>
            <li>Ensure the technical feasibility of proposed designs</li>
            <li>Address the needs of field operators to maximize product value</li>
          </ul>
        </section>
        <section className="text-section">
          <h3 className="purple2">Design Implementation</h3>
          <p>
            After identifying the business goals, user needs, and technical constraints of the project, work was organized 
            into smaller, manageable tasks. Design work then began, with many features being refined or redesigned based on 
            stakeholder and user feedback.<br></br><br></br>
            Accessibility considerations were incorporated to support low-vision users, and the dark mode experience was enhanced
            to better accommodate field operators working in low-light conditions during early mornings and evenings.
            Workflows were optimized to help operators complete tasks quickly and efficiently, as they often had
            limited time while traveling between sites.
          </p>
          <h6>Key areas of focus included:</h6>
          <ul>
            <li>Prioritizing the visual hierarchy of features based on importance</li>
            <li>Optimizing user flows around primary operator tasks</li>
            <li>Creating high-fidelity mockups for each screen to minimize implementation ambiguity</li>
            <li>Ensuring designs aligned with both iOS and Android platform standards</li>
          </ul>
        </section>
        <section className="graphic-block purple-haze">
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
          <h3 className="purple2">Final Thoughts</h3>
          <p> During my time at AbaData, I worked on several different SaaS products. Field Ops was both a challenging
          and rewarding project, as it involved a variety of technical and user-focused considerations. Through many 
          iterations and close collaboration with stakeholders, subject matter experts, and the development team, 
          the final designs were very well received. Great design is often the result of thoughtful iteration
          and strong collaboration, and I greatly appreciated the teamwork that contributed to the success of this project.
          </p>
        </section>
      </div>
    </div>
  )
}

export default FieldOpsApp
