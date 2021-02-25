import React from 'react'
import PropTypes from 'prop-types'

const CollapseDetails = ({ ariaLabel, className, color = 'white', children, open = false, title, yellow = false }) => (
  <details
    style={yellow ? { backgroundColor: '#fcf8e3' } : ''}
    className={className}
    // className={yellow ? `guidance-per-content ${className}` : className}
    open={open}
  >
    <summary className={color} aria-label={ariaLabel}>
      {title}
    </summary>
    <div
      style={
        yellow
          ? {
              marginLeft: '10px',
              marginRight: '10px',
              paddingBottom: '20px',
            }
          : ''
      }
    >
      {children}
    </div>
  </details>
)

CollapseDetails.propTypes = {
  ariaLabel: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  color: PropTypes.string,
  open: PropTypes.bool,
  title: PropTypes.string,
  yellow: PropTypes.bool,
}

export default CollapseDetails
