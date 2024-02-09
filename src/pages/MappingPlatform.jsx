import React from 'react'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import CompetitiveAnalysis from '../assets/competitive-analysis.svg'
import Flowchart from '../assets/map-flow.svg'
import UseCase1 from '../assets/use-case-1.svg'
import UseCase2 from '../assets/use-case-2.svg'
import UseCase3 from '../assets/use-case-3.svg'
import Sketches1 from '../assets/sketches1.png'
import Sketches2 from '../assets/sketches2.png'
import Wireframe1 from '../assets/map-wireframe-1.png'
import Wireframe2 from '../assets/map-wireframe-2.png'
// import Mock1 from '../assets/map1.png'
// import Mock2 from '../assets/map2.png'
import Mock3 from '../assets/map3.png'
import Mock4 from '../assets/map4.png'

function WaterMeterApp() {
  return (
    <div className="jumbo-page fade-in mapping-platform">
      <div className="jumbo-feature bg-grey-green">
        <div className="jumbo-content">
          <div className="jumbo-description">
            <div>
              <h3>Mapping Tool</h3>
              <p>A web mapping tool for the City of Calgary's website.</p>
            </div>
          </div>
          <img className="jumbo-image" src={Mock4} alt="water meter mobile app" />
        </div>
      </div>
      <div className="flex-column flex-align-center">
        <section className="text-section">
          <h3 className="grey-green">Project Background</h3>
          <p>The purpose of the Web Mapping Tool was to highlight the unique information
            the City of Calgary had access to that other map providers like Google did not offer. 
            The tool allowed users to search for City specific features such as dog parks, traffic cameras,
            road conditions, parking bans, lot easements, picnic areas, City leasure centres, and other City services. 
            The mapping tool launched in a new browser tab after users clicked a link from the City of Calgary's website.
          </p>
          <h6>My responsibilities on the project were:</h6>
          <ul>
            <li>Heuristic evaluation</li>
            <li>Competitive analysis</li>
            <li>Use case development</li>
            <li>User flow creation</li>
            <li>Design implementation</li>
            <li>Usability testing</li>
          </ul>
        </section>
        <section className="text-section">
          <h3 className="grey-green">Heuristic Evaluation</h3>
          <p className="mt-0">A heuristic evaluation was conducted for the purposes of quickly improving 
            the City of Calgary's existing mapping tool. A report was prepared and given to the development team identifying 
            the heuristic that was broken and ranked according to low, medium and high priority.
          </p>
          <h6>Some of the main problems identified were:</h6>
          <ul>
            <li>Users could only search by address, not by the locations name (Affected Heuristic: 
              Match Between System and Real World)
            </li>
            <li>Navigation tabs moved to the bottom of the screen after performing a search 
              (Affected Heuristic: User Control and Freedom)
            </li>
            <li>Clicking the "Locate Me" button resulted in long wait times, and no spinner appeared, 
              leaving users thinking the feature was broken (Affected Heuristic: Visability of System Status)
            </li>
          </ul>
        </section>
        
        <section className="graphic-block dust">
          <div className="flex-row max-width-800 m-auto">
            <div className="mr-50 text-left">
              <h3 className="grey-green mt-0">Competitive Analysis</h3>
              <p>After conducting a heuristic evaluation work on the new web mapping tool 
                could begin. A competitive analysis was done in order to ensure that the City's mapping tool matched
                users expectations of other mapping applications. Additionally, we wanted to identify features that were 
                unique to the City of Calgary in order to have a competitive advantage. 
              </p>
            </div>
            <Zoom zoomMargin={30}>
              <img className="shadow-1" src={CompetitiveAnalysis} alt="competative analysis" width="300" />
            </Zoom>
          </div>
        </section>

        <section className="text-section">
          <h3 className="grey-green">Use Case Development</h3>
          <p>We collaborated as a UX team on the creation of a few different personas. After completion of the personas, 
            I was tasked with developing a use case document. The purpose of the document was to express the user requirements
            in a technologically independent form using a narrative structure. These scenarios formed a story around the 
            character, location, and device used, when viewing the web mapping tool.
          </p>
          <h6>The following type of people were identified as potential users:</h6>
           <ul>
            <li>The Young Adult</li>
            <li>New to the City</li>
            <li>Daily Driver</li>
            <li>Property Owners</li>
            <li>Visually Impaired</li>
          </ul>
          <h6>To view the use cases below, click the image to enlarge it.</h6>
        </section>

        <section className="graphic-block tin">
          <div className="persona-grid">
            <div className="persona-grid-item">
              <Zoom zoomMargin={0}><img src={UseCase1} className="shadow-1" alt="Young adult use case" /></Zoom>
              <h5 className="grey-green">Graham</h5>
              <h6>The Young Adult</h6>
              <p className="font-15">
                <div>Age: Graham is 24</div>
                <div>Relationships: Currently living with one roommate</div>
                <div>Location: Duplex in the suburbs</div>
              </p>
            </div>
            <div className="persona-grid-item">
              <Zoom zoomMargin={0}><img src={UseCase2} className="shadow-1" alt="New to the city use case" /></Zoom>
              <h5 className="grey-green">Jon and Kim</h5>
              <h6>New to the City</h6>
              <p className="font-15">
                <div>Age: Jon is 34 and Kim is 28</div>
                <div>Relationships: Married couple with a 3 year old child</div>
                <div>Location: Living in the suburbs</div>
              </p>
            </div>
            <div className="persona-grid-item">
              <Zoom zoomMargin={0}><img src={UseCase3} className="shadow-1" alt="Property Owners use case" /></Zoom>
              <h5 className="grey-green">Henry and Karen</h5>
              <h6>Property Owners</h6>
              <p className="font-15">
                <div>Age: Henry is 59 and Karen is 58</div>
                <div>Relationships: Henry and his wife are both retired</div>
                <div>Location: Congested neighbourhood</div>
              </p>
            </div>
          </div>
        </section>


        <section className="text-section">
          <h3 className="grey-green">User Flow</h3>
          <p>Upon completion of the research, it was time to work out a basic flow that satisfied some of the use cases.
            As there were five use cases, it was not possible to cover all of the scenerios in the first version. The basic
            flow below served as a starting point that could be built upon later.
          </p>
          <h6>Some of the main features were:</h6>
           <ul>
            <li>Search (location name or address)</li>
            <li>Browse (city specific services)</li>
            <li>Directions (to and from locations)</li>
          </ul>
        </section>

        <section className="graphic-block transparent">
          <div className="max-width-800 m-auto ">
            <img src={Flowchart} className="shadow-1" alt="map flow chart" />
          </div>
        </section>
        <section className="text-section">
          <h3 className="grey-green">Design Implementation</h3>
          <p>The design process started out with rough sketches. They may not be pretty, but the important thing was 
            to get the ideas down on paper. The sketches were intended to be for my reference and not anyone elses. 
            Wireframes were then prepared for the purpose of general layout and feature placement. The wireframes were 
            presented to the UX team for design feedback, and changes were implemented accordingly. Afterwards, 
            high fidelity mockups were created and tested internally. The examples below highlight the process starting from
            the intial sketches and progressing from low to high fidelity designs.

          </p>
        </section>
        <section className="graphic-block silver">
          <div className="desktop-grid">
            <div className="desktop-grid-item">
              <Zoom zoomMargin={30}><img src={Sketches1} alt="Sketches 1" /></Zoom>
            </div>
            <div className="desktop-grid-item">
              <Zoom zoomMargin={30}><img src={Sketches2} alt="Sketches 2" /></Zoom>
            </div>
            <div className="desktop-grid-item">
              <Zoom zoomMargin={30}><img src={Wireframe1} alt="Wireframe 1" /></Zoom>
            </div>
            <div className="desktop-grid-item">
              <Zoom zoomMargin={30}><img src={Wireframe2} alt="Wireframe 2" /></Zoom>
            </div>
            <div className="desktop-grid-item">
              <Zoom zoomMargin={30}><img src={Mock3} alt="Mockup 1" /></Zoom>
            </div>
            <div className="desktop-grid-item">
              <Zoom zoomMargin={30}><img src={Mock4} alt="Mockup 2" /></Zoom>
            </div>
          </div>
        </section>
        <section className="text-section mb-100">
          <h3 className="grey-green">Usability Testing</h3>
          <p>In my experience, designers should not conduct their own usability tests due to the potential of bias
            impacting the process. In this case, I asked an internal colleague to conduct the tests. 
            I created a paper prototype and provided a couple scenerios that I wanted the users to try and complete. 
            The testers were city employees who had no previous exposure to the designs. 
          </p>
          <p>Afterwards, my colleague and I discussed the findings. Overall, the design worked very well with
            just a few small changes required for some of the labels.
          </p>
        </section>
      </div>
    </div>
  )
}

export default WaterMeterApp
