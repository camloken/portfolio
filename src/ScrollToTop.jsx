import React from 'react'
import { useLocation } from 'react-router-dom'

function ScrollToTop() {
  const { pathname } = useLocation()
  React.useEffect(() => {
    const el = document.getElementById('content')
    if (el) {
      el.scrollTo({ top: 0, behavior: 'instant' })
    }
  }, [pathname])
  return null
}

export default ScrollToTop
