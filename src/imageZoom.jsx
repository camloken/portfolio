import React, { useState } from 'react'
import styles from './imageZoom.css'

function ImageZoom({ zoom, ...rest }) {
  const [click, setClick] = useState(false)

  const setFlag = () => {
    setClick(true)
  }

  const unsetFlag = () => {
    setClick(false)
  }

  // if (!zoom) return <img {...rest} alt="mockup" />

  return (
    <>
      {click ? (
        <div onClick={unsetFlag} className="lightbox show relative">
          <img {...rest} className="show_image" />
        </div>
      ) : (
        <img {...rest} onClick={setFlag} />
      )}
    </>
  )
}

export default ImageZoom
