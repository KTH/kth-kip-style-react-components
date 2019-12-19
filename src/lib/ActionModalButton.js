import React from 'react'
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap'
import ModalHeader from './ModalHeader'
import classNames from 'classnames'

class ActionModalButton extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      isOpen: false
    }
    this.toggle = this.toggle.bind(this)
    this.handleConfirm = this.handleConfirm.bind(this)
  }

  toggle () {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  handleConfirm (event) {
    event.preventDefault()
    // return control to parent element function
    this.props.onConfirm()
    // close modal
    this.toggle()
  }

  render () {
    //* *** Properties *** *//
    // type: {publish, cancel, remove}
    // btnLabel: t.e., 'Publish and quit', if it is info modal then no btnLabel need
    // returnToUrl: where to return after canceling process
    // header: 'Modal header'
    /* modalLabels = {
      header: 'To be aware of before cancelling!',
      body: 'Unsaved changes will be lost if you cancel the publishing of course information (image and text) <br/>  <br/> Do you want to cancel?',
      btnClose: 'No, go back',
      btnConfirm: 'Yes, cancel',
    }
    */
    //* *** example 1 SUBMIT*** *//
    /*
    <ButtonModal id='publish' type='submit' btnLabel={introLabel.button.publish} handleParentConfirm={this.handlePublish}
        modalLabels={introLabel.info_publish} course={this.courseCode} alt={introLabel.alt.publish}
        disabled={this.state.hasDoneSubmit}
        />
    */
    /*
    <ButtonModal id='cancelStep1' type='cancel' course={this.courseCode}
        btnLabel={introLabel.button.cancel}
        modalLabels={introLabel.info_cancel} />
    />
   */

    const { type, modalId, modalLabels, className } = this.props
    const { header, body, btnClose, btnConfirm } = modalLabels
    const htmlBody = body
    const btnStyle = classNames(
      { secondary: type === 'cancel' },
      { success: type === 'submit' },
      { danger: type === 'remove' }
    )
    return (
      <span className={className}>
        <Button
          aria-label={type}
          color={btnStyle}
          disabled={this.props.disabled}
          onClick={this.toggle}
        >
          {this.props.btnLabel}
        </Button>
        <Modal isOpen={this.state.isOpen} toggle={this.toggle} id={modalId}>
          <ModalHeader header={header} >
            <button type='button' className='close' aria-label='Close' onClick={this.toggle}>
              <span aria-hidden='true'>×</span>
            </button>
          </ModalHeader>
          <ModalBody>
            {this.props.children}
            {htmlBody && <div dangerouslySetInnerHTML={{ __html: htmlBody }}></div>}
          </ModalBody>
          <ModalFooter>
            <Button color='secondary' onClick={this.toggle}>
              {btnClose}
            </Button>
            <Button color='secondary' type={type} onClick={this.handleConfirm}>
              {btnConfirm}
            </Button>
          </ModalFooter>
        </Modal>
      </span>
    )
  }
}

export default ActionModalButton
