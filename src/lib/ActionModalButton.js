import React from 'react'
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap'
import ModalHeader from './ModalHeader'
import classNames from 'classnames'

function ActionModalButton({
  children,
  disabled,
  onConfirm,
  stayOnModal,
  btnLabel,
  color,
  type,
  modalId,
  modalLabels,
  className,
}) {
  const [isOpen, setIfOpen] = React.useState(false)
  const { header, body: htmlBody, btnClose, btnConfirm } = modalLabels

  const btnStyle = classNames(
    { secondary: type === 'cancel' },
    { success: type === 'submit' },
    { danger: type === 'remove' },
    { link: type === 'actionLink' }
  )

  function toggle() {
    setIfOpen({
      isOpen: !isOpen,
    })
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
      <Button aria-label={type} color={btnStyle || color || 'secondary'} disabled={disabled} onClick={toggle}>
        {btnLabel}
      </Button>
      <Modal isOpen={isOpen} toggle={toggle} id={modalId}>
        <ModalHeader header={header}>
          <button type="button" className="close" aria-label="Close" onClick={toggle}>
            <span aria-hidden="true">×</span>
          </button>
        </ModalHeader>
        <ModalBody>
          {children}
          {htmlBody && <div dangerouslySetInnerHTML={{ __html: htmlBody }}></div>}
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            {btnClose}
          </Button>
          {onConfirm && (
            <Button color="secondary" type={type} onClick={handleConfirm}>
              {btnConfirm}
            </Button>
          )}
        </ModalFooter>
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
export default ActionModalButton
