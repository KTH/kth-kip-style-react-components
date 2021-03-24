import React from 'react'
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap'
import ModalHeader from './ModalHeader'
import PropTypes from 'prop-types'

const submitModalLabels = {
  header: 'To be aware of before publishing!',
  body: `The following fields cannot be changed after the information is published: <br/>
        <p> Graduation rate </p>
        <p> The information will be published on the page Course development and history </p>
        <br/>
        Do you want to publish?`,
  btnClose: 'No, go back',
  btnConfirm: 'Yes, publish',
}

const colorByType = {
  cancel: 'secondary',
  submit: 'success',
  remove: 'danger',
  actionLink: 'link',
}

function ActionModalButton({
  ariaLabel = null
  children = null,
  disabled = false,
  onConfirm = () => {},
  stayOnModal = false,
  btnLabel = 'Publish',
  color = '',
  type = 'submit',
  modalId = 'modal-to-confirm-before-submit',
  modalLabels = submitModalLabels,
  className = '',
}) {
  const [isOpen, setIfOpen] = React.useState(false)
  const { header, body: htmlBody, btnClose, btnConfirm } = modalLabels

  const btnStyle = colorByType[type] || ''

  function toggle() {
    setIfOpen(!isOpen)
  }

  function handleConfirm(event) {
    event.preventDefault()
    // return control to parent element function
    onConfirm()
    // close modal
    if (!stayOnModal) toggle()
  }

  return (
    <span className={className}>
      <Button aria-label={ariaLabel || btnLabel || type} color={btnStyle || color || 'secondary'} disabled={disabled} onClick={toggle}>
        {btnLabel}
      </Button>
      <Modal isOpen={isOpen} toggle={toggle} id={modalId}>
        <ActionModalBody
          modalId="publish"
          type="submit"
          toggle={toggle}
          onConfirm={handleConfirm}
          modalLabels={submitModalLabels}
        >
          {children}
        </ActionModalBody>
      </Modal>
    </span>
  )
}

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
    <ActionModalButton modalId='publish' type='submit' btnLabel='Publish' onConfirm={handlePublish}
        modalLabels={submitModalLabels}
        disabled={hasDoneSubmit}
        />
    */
ActionModalButton.propTypes = {
  ariaLabel: PropTypes.string,
  btnLabel: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.node,
  onConfirm: PropTypes.func,
  stayOnModal: PropTypes.bool,
  color: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.oneOf(['actionLink', 'remove', 'submit', 'cancel']),
  modalId: PropTypes.string.isRequired,
  modalLabels: PropTypes.shape({
    header: PropTypes.string,
    body: PropTypes.string,
    btnClose: PropTypes.string,
    btnConfirm: PropTypes.string,
  }),
}
export default ActionModalButton
