import React from 'react'
import { Collapse as BootstrapCollapse } from 'reactstrap'
import classNames from 'classnames'

class Collapse extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: false,
      firstLoad: 'true'
    }

    this.toggleHeader = this.toggleHeader.bind(this)
  }

  toggleHeader() {
    event.preventDefault()
    this.setState(state => ({
      isOpen: !state.isOpen,
      firstLoad: 'false'
    }))
  }

  render() {
    const {alt, buttonText, color, className, uLabel} = this.props
    const classes = classNames(
      'card',
      'collapsible',
      color,
      className
    )

    return (
      <div className={classes}>
        <div className="card-header" role='tab' tabIndex='0' onClick={this.toggleHeader}>
          <h4 className="mb-0 mt-0" >
            <a
              href="#"
              alt={alt}
              aria-expanded={this.state.isOpen}
              aria-controls={'expand-'+uLabel}
              data-toggle='collapse'
              load={this.state.firstLoad}
            >
              {buttonText}
            </a>
          </h4>
        </div>
        <BootstrapCollapse isOpen={this.state.isOpen} color={color} toggler={'expand-'+uLabel} aria-labelledby={'expand-'+uLabel}>
          <div className="card-body">{this.props.children}</div>
        </BootstrapCollapse>
      </div>
    )
  }
}

export default Collapse
