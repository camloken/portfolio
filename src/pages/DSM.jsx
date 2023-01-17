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
          <p>Prism is the flagship product of Enverus. Because it was a major component of their web software, 
            the data manager required it's own user interface. Discussions with stakeholders and developers
            were conducted over a long period of time, which resulted in many design iterations. Because this 
            was such a complex tool, it was important to simplify the product for end users. 
          </p>
          <h6>My role and responsibilities on this project included:</h6>
          <ul>
            <li>Regularly collaborating with team members</li>
            <li>Facilitating in gathering feature requirements</li>
            <li>Designing high fidelity mockups</li>
          </ul>
        </section>
        <section className="text-section">
          <h3 className="steel-grey">Collaboration</h3>
          <h6>Team meetings were held regularly in order to:</h6>
          <ul>
            <li>Walk through design iterations and gain feedback from stakeholders and developers</li>
            <li>Understand what features were required for a minimum viable product</li>
            <li>Ensure the Enverus brand guidelines were upheld</li>
          </ul>
        </section>

        <section className="text-section">
          <h3 className="steel-grey">Design and Layout</h3>
          <p>In order to test a product's viability, software features are often prototyped by developers. In this 
            case, the developer prototype served as a starting point for the final product. However, in order 
            to create an intuitive and comprehensive product, the design had to be refactored many times. This ultimately 
            improved the usability and aesthetics of the data manager.
          </p>
          <h6>Some of the things I worked on were:</h6>
          <ul>
            <li>A complete redesign of the interface</li>
            <li>Determining the style, layout, and feature placement</li>
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
          <p>It is hard to ignore the important role the data manager served in improving workflows. It allowed users 
            to merge their data with the data sets of Prism. Despite being a lengthy process, the end product has been 
            well received by Enverus customers. I am proud to have contributed to it's success.
          </p>
        </section>
      </div>
    </div>
  )
}

export default DSM
