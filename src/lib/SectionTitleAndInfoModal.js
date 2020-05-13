import React from 'react'
import InfoModalButton from './InfoModalButton'

const styles = {
  span: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  btnInfoModal: {
    verticalAlign: 'middle'
  }
}
const SectionTitleAndInfoModal = ({ modalId, titleAndInfo, btnClose, children }) => {
  const { header, body } = titleAndInfo
  const infoModalLabels = {
    header,
    body,
    btnClose: btnClose || 'Close'
  }
  return (
    <span className='section-title-and-info' style={styles.span}>
      <h2 data-testid={modalId + '-section-heading'} style={styles.h3}>
        {header}
        <InfoModalButton
          style={styles.btnInfoModal}
          modalId={modalId + '-section-infoModal'}
          modalLabels={infoModalLabels}
        />
      </h2>
      {children}
    </span>
  )
}

export default SectionTitleAndInfoModal
