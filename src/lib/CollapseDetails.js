import React from 'react'
import PropTypes from 'prop-types'

const CollapseDetails = ({
  ariaLabel = '',
  className = '',
  color = 'white',
  children,
  open = false,
  title = 'Show more information',
  yellow = false,
  ...rest
}) => (
  <details style={yellow ? { backgroundColor: '#fcf8e3' } : {}} className={className} open={open} {...rest}>
    <summary className={color} aria-label={ariaLabel}>
      {title}
    </summary>
    <div
      style={
        yellow
          ? {
              marginLeft: '10px',
              marginRight: '10px',
              paddingBottom: '2px',
            }
          : {}
      }
    >
      {children}
    </div>
  </details>
)

CollapseDetails.propTypes = {
  ariaLabel: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.oneOf(['blue', 'white']),
  title: PropTypes.string.isRequired,
  open: PropTypes.bool,
  children: PropTypes.node,
}

export default CollapseDetails
