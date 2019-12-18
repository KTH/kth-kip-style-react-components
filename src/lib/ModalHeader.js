import React from 'react'

const ModalHeader = ({header, children}) => <div className='modal-header h-4'>
  <h4 className='modal-title'>{header}</h4>
  {children}
</div>

export default ModalHeader
