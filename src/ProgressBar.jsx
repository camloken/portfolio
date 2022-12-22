import React from 'react'

function ProgressBar(props) {
  const {
    className,
    percent,
    title,
    color
  } = props

  const propsClass = className ? `progress-bar ${className}` : 'progress-bar'

  return (
    <div className={propsClass}>
      <div className="flex-row flex-align-center">
        <div className="progress-bar-bg">
          <div className="progress-color" style={{ width: `${percent}%`, backgroundColor: color }} />
        </div>
        <div>{percent}%</div>
      </div>
      <div className="progress-title">{title}</div>
    </div>
  )
}

export default ProgressBar
