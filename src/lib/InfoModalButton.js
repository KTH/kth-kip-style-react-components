import React from 'react'
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap'
import { ModalHeader } from './ModalHeader'

class InfoModalButton extends React.Component {
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
    <ButtonModal id='infoPic' type='info-icon'
        modalLabels={introLabel.info_image} course={this.courseCode} />

    */
    /*
    <ButtonModal id='cancelStep1' type='cancel' course={this.courseCode}
        returnToUrl={`${ADMIN_OM_COURSE}${this.courseCode}${CANCEL_PARAMETER}`}
        btnLabel={introLabel.button.cancel}
        modalLabels={introLabel.info_cancel} />
    />
   */

    const { id, modalLabels, className } = this.props
    const { header, body, btnCancel } = modalLabels

    return (
      <span className={className}>
        <Button className='btn-info-modal'
          onClick={this.toggle}
        />
        <Modal isOpen={this.state.isOpen} toggle={this.toggle} id={id}>
          <ModalHeader header={header} >
            <button type='button' className='close' aria-label='Close' onClick={this.toggle}>
              <span aria-hidden='true'>×</span>
            </button>
          </ModalHeader>
          <ModalBody>
            {this.props.children}
            {body && <p dangerouslySetInnerHTML={{ __html: body }}></p>}
          </ModalBody>
          <ModalFooter>
            <Button color='secondary' onClick={this.toggle}>
              {btnCancel}
            </Button>
          </ModalFooter>
        </Modal>
      </span>
    )
  }
}

export default InfoModalButton
