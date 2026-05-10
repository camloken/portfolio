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
          <p>The purpose of the Web Mapping Tool was to showcase the unique geographic and municipal data available 
          through the City of Calgary that was not offered by other mapping providers such as Google. 
          The tool enabled users to search for city-specific features including dog parks, traffic cameras, road conditions, 
          parking bans, lot easements, picnic areas, leisure centres, and other municipal services. The mapping 
          application launched in a separate browser tab when users accessed it through the City of Calgary website.
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
            the City of Calgary's existing mapping tool. A detailed report was then prepared for the development team, 
            outlining violated heuristics and prioritizing issues according to low, medium, and high severity levels.
          </p>
          <h6>Some of the primary usability issues identified included:</h6>
          <ul>
            <li>
              Users could only search by address rather than by location name
              (Affected Heuristic: Match Between System and the Real World)
            </li>
            <li>
              Navigation tabs shifted to the bottom of the screen after performing a search
              (Affected Heuristic: User Control and Freedom)
            </li>
            <li>
              Selecting the “Locate Me” feature resulted in long wait times without a loading indicator, 
              causing users to believe the feature was broken (Affected Heuristic: Visibility of System Status)
            </li>
          </ul>
        </section>

        <section className="graphic-block dust">
          <div className="flex-row max-width-800 m-auto">
            <div className="mr-50 text-left">
              <h3 className="grey-green mt-0">Competitive Analysis</h3>
              <p>After conducting a heuristic evaluation work on the new web mapping tool could begin.
                A competitive analysis was done in order to ensure that the City's mapping tool matched users expectations
                of other mapping applications. Additionally, we wanted to identify features that were unique to the
                City of Calgary in order to have a competitive advantage.
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
          <p>Upon completion of the research phase, the next step was to develop a foundational user flow that addressed
            several of the identified use cases. Since there were five primary use cases, it was not feasible to
            accommodate every scenario in the initial version. The flow below served as a foundational framework
            that could be expanded upon in future iterations.
          </p>
          <h6>Some of the core features included</h6>
           <ul>
            <li>Search functionality by location name or address</li>
            <li>Browsing city-specific services and points of interest</li>
            <li>Directions to and from selected locations</li>
          </ul>
        </section>

        <section className="graphic-block transparent">
          <div className="max-width-800 m-auto ">
            <img src={Flowchart} className="shadow-1" alt="map flow chart" />
          </div>
        </section>
        <section className="text-section">
          <h3 className="grey-green">Design Implementation</h3>
          <p>The design process began with rough sketches. While they were not visually refined, the primary goal was to 
            quickly capture ideas and explore concepts on paper. These sketches were intended primarily for personal reference 
            during the early ideation phase. <br></br><br></br>
            Wireframes were then created to establish the general layout, information hierarchy, 
            and feature placement. The wireframes were presented to the UX team for feedback, and revisions were implemented based 
            on collaborative discussion and design review.<br></br><br></br>
            Following the wireframing stage, high-fidelity mockups were developed 
            and tested internally. The examples below illustrate the progression of the design process, beginning with the initial 
            sketches and evolving from low-fidelity concepts to polished high-fidelity designs.
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
          <p>In my experience, designers should avoid conducting their own usability tests, as personal involvement
            in the design process can introduce unintended bias. In this case, I asked an internal colleague to facilitate
            the testing sessions. I created a paper prototype and prepared several user scenarios for participants to complete.
            The testers were City employees with no prior exposure to the designs, allowing for more objective and unbiased feedback. 
          </p>
          <p>After the sessions, my colleague and I reviewed and discussed the findings. Overall, the design tested very well,
            with only a few minor adjustments required to improve the clarity of certain labels.
          </p>
        </section>
      </div>
    </div>
  )
}

export default WaterMeterApp
