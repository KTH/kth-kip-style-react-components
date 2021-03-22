import React from 'react'
import HeadingAsteriskModal from './HeadingAsteriskModal'
import PropTypes from 'prop-types'

const TitleAndInfoModal = ({ ariaLabel, ariaLang, modalId, withAsterisk, titleAndInfo, btnClose, children }) => (
  <HeadingAsteriskModal
    ariaLabel={ariaLabel}
    ariaLang={ariaLang}
    headingTag="h3"
    modalId={modalId}
    titleAndInfo={titleAndInfo}
    btnClose={btnClose}
    withAsterisk={withAsterisk}
    withModal
  >
    {children}
  </HeadingAsteriskModal>
)

TitleAndInfoModal.propTypes = {
  ariaLabel: PropTypes.string,
  ariaLang: PropTypes.string,
  modalId: PropTypes.string.isRequired,
  titleAndInfo: PropTypes.shape({
    header: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
  btnClose: PropTypes.string,
  withAsterisk: PropTypes.bool,
  children: PropTypes.node,
}

TitleAndInfoModal.defaultProps = {
  ariaLabel: null,
  ariaLang: 'en',
  withAsterisk: false,
  btnClose: null,
  children: null,
}

export default TitleAndInfoModal
