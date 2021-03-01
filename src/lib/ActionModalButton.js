import React from 'react'
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap'
import ModalHeader from './ModalHeader'

const colorByType = {
  cancel: 'secondary',
  submit: 'success',
  remove: 'danger',
  actionLink: 'link',
}

class ActionModalButton extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: false,
    }
    this.toggle = this.toggle.bind(this)
    this.handleConfirm = this.handleConfirm.bind(this)
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  handleConfirm(event) {
    event.preventDefault()
    const { onConfirm, stayOnModal } = this.props
    // return control to parent element function
    onConfirm()
    // close modal
    if (!stayOnModal) this.toggle()
  }

  render() {
    //* *** Properties *** *//
    // type: {publish, cancel, remove}
    // btnLabel: t.e., 'Publish and quit', if it is info modal then no btnLabel need
    // header: 'Modal header'
    /* EXAMPLE 1: CANCEL */
    /* cancelModalLabels = {
      header: 'To be aware of before cancelling!',
      body: 'Unsaved changes will be lost if you cancel the publishing of course information (image and text) <br/>  <br/> Do you want to cancel?',
      btnClose: 'No, go back',
      btnConfirm: 'Yes, cancel',
    }
        <ActionModalButton btnLabel='Cancel'
        modalId="cancelStep2"
        type="cancel"
        modalLabels={cancelModalLabels}
        onConfirm={() => console.log('Cancelled')}
    */
    /* example 2: SUBMIT */
    /*
    submitModalLabels =
      header: 'To be aware of before publishing!',
	    body: `The following fields cannot be changed after the information is published: <br/>
        <p> Graduation rate </p>
        <p> The information will be published on the page Course development and history </p>
        <br/>
        Do you want to publish?`,
      btnClose: 'No, go back',
      btnConfirm: 'Yes, publish'
    }
    <ActionModalButton modalId='publish' type='submit' btnLabel='Publish' onConfirm={this.handlePublish}
        modalLabels={submitModalLabels}
        disabled={this.state.hasDoneSubmit}
        />
    */

    const { btnLabel, color, type, modalId, modalLabels, className } = this.props
    const { header, body: htmlBody, btnClose, btnConfirm } = modalLabels

    const btnStyle = colorByType[type] || ''

    return (
      <span className={className}>
        <Button
          aria-label={type}
          color={btnStyle || color || 'secondary'}
          disabled={this.props.disabled}
          onClick={this.toggle}
        >
          {btnLabel}
        </Button>
        <Modal isOpen={this.state.isOpen} toggle={this.toggle} id={modalId}>
          <ModalHeader header={header}>
            <button type="button" className="close" aria-label="Close" onClick={this.toggle}>
              <span aria-hidden="true">×</span>
            </button>
          </ModalHeader>
          <ModalBody>
            {this.props.children}
            {htmlBody && <div dangerouslySetInnerHTML={{ __html: htmlBody }}></div>}
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>
              {btnClose}
            </Button>
            {this.props.onConfirm && (
              <Button color="secondary" type={type} onClick={this.handleConfirm}>
                {btnConfirm}
              </Button>
            )}
          </ModalFooter>
        </Modal>
      </span>
    )
  }
}

export default ActionModalButton
