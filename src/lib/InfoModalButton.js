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
    //* *** Properties *** *//

    /* modalLabels = {
      header: 'To be aware of before cancelling!',
      body: 'Unsaved changes will be lost if you cancel the publishing of course information (image and text) <br/>  <br/> Do you want to cancel?',
      btnCancel: 'No, go back',
      btnConfirm: 'Yes, cancel',
    }
    */
    //* *** example 2 INFO ICON*** *//
    /*
    <InfoModalButton id='infoPic'
        modalLabels={introLabel.info_image} />

    */

    const { className, uuid, modalLabels } = this.props
    const { header, body, btnCancel } = modalLabels

    return (
      <span className={className}>
        <Button className='btn-info-modal' aria-label='Info'
          onClick={this.toggle}
        />
        <InfoModal isOpen={this.state.isOpen} onToggle={this.toggle}
          id={uuid} header={header} body={body} closeLabel={btnCancel} />
      </span>
    )
  }
}

export default InfoModalButton
