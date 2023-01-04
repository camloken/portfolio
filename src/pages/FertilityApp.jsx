import React from 'react'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import Mock1 from '../assets/fertility1.svg'
import Mock2 from '../assets/fertility2.svg'
import Mock3 from '../assets/fertility3.svg'
import Mock4 from '../assets/fertility4.svg'
// import Mock5 from '../assets/fertility5.svg'
import FertilityFlow from '../assets/fertility-flow.png'
import Stickies from '../assets/fertility-stickies.svg'

function FertilityClinic() {
  return (
    <div className="jumbo-page fade-in fertility-app">
      <div className="jumbo-feature bg-teal">
        <div className="jumbo-content">
          <div className="jumbo-description">
            <div>
              <h3>Fertility Clinic</h3>
              <p>A tablet and desktop app for managing the Fertility Clinic patients.</p>
            </div>
          </div>
          <img className="jumbo-image" src={Mock3} alt="fertility clinic app" />
        </div>
      </div>
      <div className="flex-column flex-align-center">
        <section className="text-section">
          <h3 className="teal">Project Background</h3>
          <p>For privacy reasons, the name and logo of this company has been changed to protect the identity of
            the client. This app was the first step towards moving the paperwork and patient scheduling 
            to an online system for the Fertility Clinic.
          </p>
          <h6>My Role and Responsibilities:</h6>
          <ul>
            <li>Participate in stakeholder meetings</li>
            <li>Collaborate on user story development</li>
            <li>Aid in user flow creation</li>
            <li>Design the final mockups</li>
          </ul>
        </section>
        <section className="text-section">
          <h3 className="teal">Stakeholder Meetings</h3>
          <h6>Stakeholder discussions were conducted regularly with the Fertility Clinic in order to:</h6>
          <ul>
            <li>Gain insight and understanding from different users within the clinic</li>
            <li>Understand the technical capabilities and limitations of the app</li>
            <li>Uphold the clinic's requirements for patient privacy and HIPAA compliance within the design</li>
          </ul>
        </section>
        <section className="text-section">
          <h3 className="teal">User Stories</h3>
          <p className="mt-0">After several meetings, the team identified the main users that would be 
            utilizing the app. As a group we created user stories based on the needs of different individuals. 
          </p>
        </section>
        <section className="graphic-block beige">
          <img src={Stickies} alt="sticky notes" />
        </section>
        <section className="text-section">

          <h6>The three main groups that were identified were:</h6>
          <ul>
            <li>Fertility patients (usually consisting of the patient and their spouse)</li>
            <li>Medical Office Assistants or MOA's (coordinating the initial paper work and booking appointments)</li>
            <li>Nurses (providing treatments and care to the patients)</li>
          </ul>
        </section>
        <section className="text-section">
          <h3 className="teal">User Flows</h3>
          <p>I collaborated with the team on how we wanted to build out our user flows. 
            While I was not directly responsible for creating the flow shown here, I had significant input
            on the details and we reiterated the design until we got this basic flow.
          </p>
        </section>
        <section className="graphic-block transparent">
          <Zoom zoomMargin={30}><img className="fertility-flowchart" src={FertilityFlow} alt="fertility flow chart" /></Zoom>
        </section>
        <section className="text-section">
          <h3 className="teal">Design Implementation</h3>
          <p>After gaining insights from stakeholders discussions, we decided that the app
            would be designed for tablets and desktop. Once the user stories were defined, 
            the design work could begin.
          </p>
          <h6>I proceeded to work on:</h6>
          <ul>
            <li>Creating low fidelity layouts to get an idea on placement of the main features</li>
            <li>Creating high fidelity mockups to illustrate the look and feel of the app</li>
          </ul>
        </section>
        <section className="graphic-block silver">
          <div className="desktop-grid">
            <div className="desktop-grid-item">
              <Zoom zoomMargin={30}><img src={Mock1} alt="Fertility app mock 1" /></Zoom>
            </div>
            <div className="desktop-grid-item">
              <Zoom zoomMargin={30}><img src={Mock2} alt="Fertility app mock 2" /></Zoom>
            </div>
            <div className="desktop-grid-item">
              <Zoom zoomMargin={30}><img src={Mock3} alt="Fertility app mock 3" /></Zoom>
            </div>
            <div className="desktop-grid-item">
              <Zoom zoomMargin={30}><img src={Mock4} alt="Fertility app mock 4" /></Zoom>
            </div>
            {/* <div className="desktop-grid-item"> */}
            {/*   <img src={Mock5} alt="Fertility app mock 5" /> */}
            {/* </div> */}
          </div>
        </section>
        <section className="text-section mb-100">
          <h3 className="teal">Final Thoughts</h3>
          <p>This app only ever reached the prototype stage as the Fertility Clinic decided to prioritize
            other clinic requirements. Nevertheless, the research and design of this app was an excellent
            learning opportunity.
          </p>
        </section>
      </div>
    </div>
  )
}

export default FertilityClinic
