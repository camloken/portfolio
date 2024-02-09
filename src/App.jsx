import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link,
  // NavLink,
} from 'react-router-dom'
import { NavHashLink } from 'react-router-hash-link'
import logo from './assets/loken_logo.svg'
import Home from './pages/Home'
import MappingPlatform from './pages/MappingPlatform'
import WaterMeterApp from './pages/WaterMeterApp'
import FertilityApp from './pages/FertilityApp'
import MuseApp from './pages/MuseApp'
import ChatApp from './pages/ChatApp'
import SecureMail from './pages/SecureMail'
import DSM from './pages/DSM'
import NotFound from './pages/NotFound'
import ScrollToTop from './ScrollToTop'
import './App.css'

function App() {
  return (
    <>
      <div className="topbar-wrap">
        <div className="topbar max-width">
          <img src={logo} className="logo" alt="logo" />
          <ul className="nav">
            <li><NavHashLink smooth to="/#home">Home</NavHashLink></li>
            <li><NavHashLink smooth to="/#work">Work</NavHashLink></li>
            <li><NavHashLink smooth to="/#skills">Skills</NavHashLink></li>
            <li><NavHashLink smooth to="/#contact">Contact</NavHashLink></li>
          </ul>
        </div>
      </div>
      <div id="content" className="content">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mapping-platform" element={<MappingPlatform />} />
          <Route path="/water-meter-app" element={<WaterMeterApp />} />
          <Route path="/fertility-app" element={<FertilityApp />} />
          <Route path="/muse-app" element={<MuseApp />} />
          <Route path="/chat-app" element={<ChatApp />} />
          <Route path="/secure-mail" element={<SecureMail />} />
          <Route path="/prism-data-manager" element={<DSM />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

    </>
  )
}

function WrappedApp() {
  return (
    <Router>

        <App />

    </Router>
  )
}

export default WrappedApp
