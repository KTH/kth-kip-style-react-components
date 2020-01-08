import React from 'react'
import InfoModalButton from './InfoModalButton'

const styles = {
  span: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  btnInfoModal: {
    // /specific for this project
    verticalAlign: 'middle'
  },
  h3: {
    marginTop: '0'
  }
}
const TitleAndInfoModal = ({ modalId, titleAndInfo, btnClose }) => {
  const { header, body } = titleAndInfo
  const infoModalLabels = {
    header,
    body,
    btnClose: btnClose || 'Close'
  }
  return (
    <span className='title-and-info' style={styles.span}>
      <h3 data-testid={modalId + '-heading'} style={styles.h3}>
        {header}
        <InfoModalButton
          style={styles.btnInfoModal}
          modalId={modalId + '-infoModal'}
          modalLabels={infoModalLabels}
        />
      </h3>
    </span>
  )
}

export default TitleAndInfoModal
