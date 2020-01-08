import React from 'react'
import { InfoModalButton } from '@kth/kth-kip-style-react-components'

const TitleAndInfoModal = ({ modalId, titleInfo, btnClose }) => {
  const { header, body } = titleInfo
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
