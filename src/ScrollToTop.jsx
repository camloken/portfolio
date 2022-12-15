import React from 'react'
import { useLocation } from 'react-router-dom'

function ScrollToTop() {
  const { pathname } = useLocation()
  React.useEffect(() => document.getElementById('content').scrollTo({ top: 0, behavior: 'instant' }), [pathname])
  return null
}

export default ScrollToTop
