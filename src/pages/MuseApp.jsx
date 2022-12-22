import React from 'react'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import Mock1 from '../assets/muse1.png'
import Mock2 from '../assets/muse2.png'
import Mock3 from '../assets/muse3.png'
import Mock4 from '../assets/muse4.png'
import Mock5 from '../assets/muse5.png'
import Mock6 from '../assets/muse6.png'

function MuseApp() {
  return (
    <div className="jumbo-page fade-in muse-app">
      <div className="jumbo-feature bg-green2">
        <div className="jumbo-content">
          <div className="jumbo-description">
            <div>
              <h3>Muse App</h3>
              <p>A web app for analyzing energy investments.</p>
            </div>
          </div>
          <img className="jumbo-image" src={Mock3} alt="Muse app" />
        </div>
      </div>
      <div className="flex-column flex-align-center">
        <section className="text-section">
          <h3 className="green2">Project Background</h3>
          <p>As part of my time at Enverus, I designed several prototypes for various products that went into production. 
            Muse was one such app that started with a developers prototype and later required input from the UX team. 
            After much collaboration I was able to guide the design by refactoring the existing layouts they had.
          </p>
          <h6>My role and responsibilities included:</h6>
          <ul>
            <li>Collaborate with team members</li>
            <li>Facilitate in gathering requirements</li>
            <li>Design the final mockups</li>
          </ul>
        </section>
        <section className="text-section">
          <h3 className="green2">Team Meetings</h3>
          <h6>Team meetings were conducted in order to:</h6>
          <ul>
            <li>Gain insight and understanding for what was possible for the first version of the app</li>
            <li>Understand the technical capabilities and limitations of the product</li>
            <li>Align the design according to the Enverus brand and software guidelines</li>
          </ul>
        </section>

        <section className="text-section">
          <h3 className="green2">Design Refactoring</h3>
          <p>The design work required was such that the developers were reusing many components from existing apps. 
            While this can save a lot of time and money, much of the existing design looked dated and not on brand. 
            Improvements were needed badly.
          </p>
          <h6>I proceeded to work on:</h6>
          <ul>
            <li>Redesigning some of the existing layouts</li>
            <li>Determining what features and components needed to be refactored</li>
            <li>Creating high fidelity mockups to illustrate the look and feel of the app</li>
          </ul>
        </section>
        <section className="graphic-block green-grey">
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
          <h3 className="green2">Final Thoughts</h3>
          <p>I have seen many apps start out on the wrong foot that need a complete redesign. 
            However, I was pleasently surprised to see that much of the interface in this case was quite intuative.
            It was just a matter of a few tweaks here and there, with some adjustments to the styles and layout.
            The product managers and developers were very receptive to the new design and it was a major improvement 
            over what they had previously.
          </p>
        </section>
      </div>
    </div>
  )
}

export default MuseApp
