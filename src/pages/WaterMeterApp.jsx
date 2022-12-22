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
          <p>The Water Meter App was the first step towards
            moving service workers from paper reporting to a fully mobile app. 
            The app allowed users to create, submit and leave feedback on their for digital reporting. 
            Once a report was submitted, managers could then review them in a separate desktop application.
          </p>
          <h6>My Role and Responsibilities:</h6>
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
            <li>Understanding the technical capabilities and limitations</li>
            <li>Aligning the design with the City of Calgary's brand</li>
          </ul>
        </section>
        <section className="text-section">
          <h3 className="purple1">Persona Development</h3>
          <p className="mt-0">Before starting the project it was important to identify what types of people would 
            be using the app. While this may seem straight forward at first glance it became clearer 
            after multiple stakeholder discussions that field workers were not the only ones that 
            would be using the app. 
          </p>
        </section>
        <section className="graphic-block purple-haze">
          <div className="persona-grid">
            <div className="persona-grid-item">
              <img src={FieldWorker} alt="Field Worker" />
              <h5>Jonathan</h5>
              <h6>Field Worker (Primary User)</h6>
              <p>Johnathan is on the go all day and visits multiple job sites. 
                He carries a work mobile phone with him.
              </p>
            </div>
            <div className="persona-grid-item">
              <img src={Manager} alt="Manager" />
              <h5>Terry</h5>
              <h6>Waterworks Manager</h6>
              <p>Terry works at his computer in the office analyzing field reports. Once in a while he will visit job sites.</p>
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

          <h6>There were actually three groups of users that were identified:</h6>
          <ul>
            <li>Field workers (water meter workers in the field on various job sites)</li>
            <li>Waterworks managers (working primarily in the office)</li>
            <li>Customer support representatives (in office providing support for field workers and customers)</li>
          </ul>
        </section>
        <section className="text-section">
          <h3 className="purple1">User Flows</h3>
          <p>After accompanying a field worker with visits to multiple job sites, it became clear that
            they followed a very structured work process. Certain criteria needed to be met and tasks were done in 
            a linear order before sign off could occur. A user flow was then created to reflect that process.
          </p>
        </section>
        <section className="graphic-block">
          <div className="max-width m-auto ">
            <Zoom zoomMargin={30}><img src={Flowchart} alt="water meter app flow chart" /></Zoom>
          </div>
        </section>
        <section className="text-section">
          <h3 className="purple1">Design Implementation</h3>
          <p>After gaining insights from various discussions with the stakeholders, we decided that the app
            would be designed only for mobile use. Once the personas and main features of the app were identified, 
            design work could now begin.
          </p>
          <h6>I proceeded to work on:</h6>
          <ul>
            <li>Creating wireframes to identify applicable features and layout</li>
            <li>Creating high fidelity mockups to illustrate the look and feel of the app</li>
            <li>Designing detailed layouts for each screen in the user flow</li>
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
          <p>I've worked with the City of Calgary in various contract roles in the past. This one was both 
            challenging and rewarding. After handing off the deliverables as part of my contract, I talked to a former 
            City colleague years later and he mentioned that the app was completed and was executed very well.
          </p>
        </section>
      </div>
    </div>
  )
}

export default WaterMeterApp
