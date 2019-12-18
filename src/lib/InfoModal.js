import { Button, Modal as ModalReactstrap, ModalBody, ModalFooter } from 'reactstrap'
import ModalHeader from './ModalHeader'

const InfoModal = ({ id, isOpen, header, body, closeLabel }) => {
  <ModalReactstrap isOpen={isOpen} toggle={this.props.onToggle} id={id}>
    <ModalHeader header={header} >
      <button type='button' className='close' aria-label={'Close'} onClick={this.props.onToggle}>
        <span aria-hidden='true'>×</span>
      </button>
    </ModalHeader>
    <ModalBody>
      {this.props.children}
      {body && <p dangerouslySetInnerHTML={{ __html: body }}></p>}
    </ModalBody>
    <ModalFooter>
      <Button color='secondary' onClick={this.props.onToggle}>
        {closeLabel}
      </Button>
    </ModalFooter>
  </ModalReactstrap>
}

export default InfoModal
