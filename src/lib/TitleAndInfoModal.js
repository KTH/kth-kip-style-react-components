import React from 'react'
import InfoModalButton from './InfoModalButton'

const TitleAndInfoModal = ({ modalId, titleAndInfo, btnClose }) => {
  const { header, body } = titleAndInfo
  const infoModalLabels = {
    header,
    body,
    btnClose: btnClose || 'Close'
  }
  return (
    <span className='title-and-info'>
      <h3 data-testid={modalId + '-heading'}>
        {header}
        <InfoModalButton
          modalId={modalId + '-infoModal'}
          modalLabels={infoModalLabels}
        />
      </h3>
    </span>
  )
}

export default TitleAndInfoModal
