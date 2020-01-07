import React, { Component } from 'react'
import { Button } from 'reactstrap'
import InfoModal from './InfoModal'

class InfoModalButton extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isOpen: false
    }
    this.toggle = this.toggle.bind(this)
  }

  toggle () {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render () {
    //* *** Example *** *//
    /*
    modalLabels = {
      header: 'Choose image',
      body: `<p>Choose the image that will be displayed on the page Course information.
        You can choose a default image based on the main subject of the course or choose to upload an image on your own choice.
        The image will be displayed with the format 300px * 400px. The file format must be .png or .jpg.</p>`,
      btnClose: 'Close'
    }
    <InfoModalButton
      modalId='infoPic'
      modalLabels={modalLabels}
    />
    */

    const { className, modalId, modalLabels } = this.props // maybe add id
    const { header, body, btnClose } = modalLabels

    return (
      <span className={className}>
        <Button className='btn-info-modal' aria-label='Info'
          onClick={this.toggle}
        />
        <InfoModal isOpen={this.state.isOpen} children={this.props.children} onToggle={this.toggle}
          id={modalId} header={header} htmlBody={body} closeLabel={btnClose} />
      </span>
    )
  }
}

export default InfoModalButton
