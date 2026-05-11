import React from 'react'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import Flowchart from '../assets/water-meter-app-flowchart.svg'
import FieldWorker from '../assets/field-worker.png'
import Manager from '../assets/office-manager.png'
import CustomerRep from '../assets/customer-service-rep.png'
import Mock1 from '../assets/water-meter1.svg'
import Mock2 from '../assets/water-meter2.svg'
import Mock3 from '../assets/water-meter3.svg'
import Mock4 from '../assets/water-meter4.svg'
import Mock5 from '../assets/water-meter5.svg'
import Mock6 from '../assets/water-meter6.svg'

function WaterMeterApp() {
  return (
    <div className="jumbo-page fade-in water-meter-app">
      <div className="jumbo-feature bg-purple1">
        <div className="jumbo-content">
          <div className="jumbo-description">
            <div>
              <h3>Water Meter App</h3>
              <p>A mobile app for the City of Calgary's water meter management.</p>
            </div>
          </div>
          <img className="jumbo-image" src={Mock1} alt="water meter mobile app" />
        </div>
      </div>
      <div className="flex-column flex-align-center">
        <section className="text-section">
          <h3 className="purple1">Project Background</h3>
          <p>The Water Meter App was an initial step toward transitioning service workers from paper-based reporting
            to a fully mobile workflow. The application allowed users to create, submit, and provide feedback through a
            centralized digital reporting system. Once reports were submitted, managers could review them through a
            separate desktop application.
          </p>
          <h6>My role and responsibilities:</h6>
          <ul>
            <li>Stakeholder meetings</li>
            <li>Persona development</li>
            <li>Creating user flows</li>
            <li>Designing high fidelity mockups</li>
          </ul>
        </section>
        <section className="text-section">
          <h3 className="purple1">Stakeholder Meetings</h3>
          <h6>Stakeholder discussions were conducted regularly for the purposes of:</h6>
          <ul>
            <li>Gaining insight and understanding from different teams and departments</li>
            <li>Understanding the technical capabilities and limitations of the app</li>
            <li>Aligning the design with the City of Calgary's brand</li>
          </ul>
        </section>
        <section className="text-section">
          <h3 className="purple1">Persona Development</h3>
          <p className="mt-0">Before starting the project, it was important to identify the types of users who would be
            interacting with the application. While this may seem straightforward, it became clear through multiple stakeholder
            discussions that field workers were not the only user group. The personas below have been recreated from memory
            and are intended to provide a high-level overview.
          </p>

          <h6>Three different user groups were identified:</h6>
          <ul>
            <li>Field workers (water meter technicians working across various job sites)</li>
            <li>Waterworks managers (primarily office-based, with occasional on-site involvement)</li>
            <li>Customer support representatives (office-based, supporting both field workers and customers)</li>
          </ul>
        </section>
        <section className="graphic-block purple-haze">
          <div className="persona-grid">
            <div className="persona-grid-item">
              <img src={FieldWorker} alt="Field Worker" />
              <h5>Jonathan</h5>
              <h6>Field Worker (Primary User)</h6>
              <p>Johnathan is in the field all day and visits multiple job sites. 
                He carries a work mobile phone with him.
              </p>
            </div>
            <div className="persona-grid-item">
              <img src={Manager} alt="Manager" />
              <h5>Terry</h5>
              <h6>Waterworks Manager</h6>
              <p>Terry works at his computer in the office analyzing field reports. Once in a while, he will visit job sites.</p>
            </div>
            <div className="persona-grid-item">
              <img src={CustomerRep} alt="Customer Service Rep" />
              <h5>Sylvia</h5>
              <h6>Customer Support</h6>
              <p>Sylvia works in the office taking service calls from customers and field workers when problems occur.</p>
            </div>
          </div>
        </section>

        <section className="text-section">
          <h3 className="purple1">User Flows</h3>
          <p>After accompanying a field worker on visits to multiple job sites, it became clear that they followed a
            highly structured workflow. Specific criteria had to be met, and tasks were completed in a defined
            chronological order before field reports could be signed off. A user flow was then developed to accurately
            reflect this process. The flow below has been recreated for illustrative purposes.
          </p>
        </section>
        <section className="graphic-block transparent">
          <div className="max-width m-auto ">
            <Zoom zoomMargin={30}><img src={Flowchart} alt="water meter app flow chart" /></Zoom>
          </div>
        </section>
        <section className="text-section">
          <h3 className="purple1">Design Implementation</h3>
          <p>After gathering insights from discussions with stakeholders, it was decided that the application
            would initially be designed for mobile use. Once the personas and core features were defined,
            the design phase began.
          </p>
          <h6>I primarily focused on:</h6>
          <ul>
            <li>Creating wireframes to determine feature placement and overall application layout</li>
            <li>Developing high-fidelity mockups to communicate the visual design and user experience</li>
            <li>Designing detailed screens for each step of the user flow</li>
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
          </div>
        </section>
        <section className="text-section mb-100">
          <h3 className="purple1">Post Production</h3>
          <p>I have worked with the City of Calgary in various contract roles over the years. This engagement
            was both challenging and rewarding. After completing and handing off my deliverables, I later spoke with
            a former City colleague who shared that the application had been completed and successfully implemented,
            with a very positive reception.
          </p>
        </section>
      </div>
    </div>
  )
}

export default WaterMeterApp
