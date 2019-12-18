import React from 'react'
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap'
import ModalHeader from './ModalHeader'

const InfoModal = ({ id, isOpen, header, body, children, closeLabel, onToggle }) => {
  return (
    <Modal isOpen={isOpen} toggle={onToggle} id={id}>
      <ModalHeader header={header} >
        <button type='button' className='close' aria-label={'Close'} onClick={onToggle}>
          <span aria-hidden='true'>×</span>
        </button>
      </ModalHeader>
      <ModalBody>
        {children}
        {body && <p dangerouslySetInnerHTML={{ __html: body }}></p>}
      </ModalBody>
      <ModalFooter>
        <Button color='secondary' onClick={onToggle}>
          {closeLabel}
        </Button>
      </ModalFooter>
    </Modal>
  )
}
export default InfoModal
