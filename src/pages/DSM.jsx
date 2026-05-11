import React from 'react'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import MockPreview from '../assets/dsm-preview.png'
import Mock1 from '../assets/dsm1.png'
import Mock2 from '../assets/dsm2.png'
import Mock3 from '../assets/dsm3.png'
import Mock4 from '../assets/dsm4.png'
import Mock5 from '../assets/dsm5.png'
import Mock6 from '../assets/dsm6.png'

function DSM() {
  return (
    <div className="jumbo-page fade-in prism-data-manager">
      <div className="jumbo-feature bg-steel-grey">
        <div className="jumbo-content">
          <div className="jumbo-description">
            <div>
              <h3>Prism Data Manager</h3>
              <p>An interface for creating custom energy data sets.</p>
            </div>
          </div>
          <img className="jumbo-image" src={MockPreview} alt="Prism data manager" />
        </div>
      </div>
      <div className="flex-column flex-align-center">
        <section className="text-section">
          <h3 className="steel-grey">Project Background</h3>
          <p>
            Prism is the flagship product of Enverus. As a core component of their web platform, the Data Manager required
            its own dedicated user interface. Discussions with stakeholders and developers took place over an extended period,
            resulting in multiple design iterations. Given the complexity of the tool, it was essential to simplify the
            workflow as much as possible for end users.
          </p>
          <h6>My role and responsibilities on this project included:</h6>
          <ul>
            <li>Regular collaboration with cross-functional team members</li>
            <li>Paticipating in feature requirement gathering sessions</li>
            <li>Designing high-fidelity mockups</li>
          </ul>
        </section>
        <section className="text-section">
          <h3 className="steel-grey">Collaboration</h3>
          <h6>Team meetings were held regularly to:</h6>
          <ul>
            <li>Review designs with stakeholders and developers to ensure all requirements were captured</li>
            <li>Understand and prioritize features for the minimum viable product (MVP)</li>
            <li>Ensure alignment with Enverus brand guidelines</li>
          </ul>
        </section>

        <section className="text-section">
          <h3 className="steel-grey">Design and Layout</h3>
          <p>
            To evaluate product viability, software features are often initially prototyped by developers. In this case,
            the developer-built prototype served as the starting point for the final product. However, to create a more
            intuitive and comprehensive experience, the design required multiple iterations and refinements. This process
            ultimately improved both the usability and visual design of the Data Manager.
          </p>
          <h6>Some of the areas I worked on included:</h6>
          <ul>
            <li>A comprehensive redesign of the interface</li>
            <li>Defining the visual style, layout, and feature hierarchy</li>
            <li>Providing detailed mockups for the development team</li>
          </ul>
        </section>
        <section className="graphic-block silver">
          <div className="desktop-grid">
            <div className="desktop-grid-item">
              <Zoom zoomMargin={30}><img src={Mock1} alt="Muse app mock 1" /></Zoom>
            </div>
            <div className="desktop-grid-item">
              <Zoom zoomMargin={30}><img src={Mock2} alt="Muse app mock 2" /></Zoom>
            </div>
            <div className="desktop-grid-item">
              <Zoom zoomMargin={30}><img src={Mock3} alt="Muse app mock 3" /></Zoom>
            </div>
            <div className="desktop-grid-item">
              <Zoom zoomMargin={30}><img src={Mock4} alt="Muse app mock 4" /></Zoom>
            </div>
            <div className="desktop-grid-item">
              <Zoom zoomMargin={30}><img src={Mock5} alt="Muse app mock 5" /></Zoom>
            </div>
            <div className="desktop-grid-item">
              <Zoom zoomMargin={30}><img src={Mock6} alt="Muse app mock 5" /></Zoom>
            </div>
          </div>
        </section>
        <section className="text-section mb-100">
          <h3 className="steel-grey">Final Thoughts</h3>
          <p>It is difficult to overlook the importance of the Data Manager feature in improving workflows.
            It enabled users to merge their data with Prism datasets, streamlining data integration and analysis. Despite being
            a lengthy process, the final product has been well received by Enverus customers. I am proud to have
            contributed to its success.
          </p>
        </section>
      </div>
    </div>
  )
}

export default DSM
