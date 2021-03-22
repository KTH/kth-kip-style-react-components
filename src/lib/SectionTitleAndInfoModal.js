import React from 'react'
import HeadingAsteriskModal from './HeadingAsteriskModal'

const SectionTitleAndInfoModal = ({ ariaLang, modalId, titleAndInfo, btnClose, children, withAsterisk }) => (
  <HeadingAsteriskModal
    ariaLang={ariaLang}
    headingTag="h2"
    modalId={modalId}
    titleAndInfo={titleAndInfo}
    btnClose={btnClose}
    withAsterisk={withAsterisk}
    withModal
  >
    {children}
  </HeadingAsteriskModal>
)

SectionTitleAndInfoModal.propTypes = {
  ariaLabel: PropTypes.string,
  ariaLang: PropTypes.string,
  modalId: PropTypes.string.isRequired,
  titleAndInfo: PropTypes.shape({
    header: PropTypes.string.isRequired,
    body: PropTypes.string,
  }),
  btnClose: PropTypes.string,
  withAsterisk: PropTypes.bool,
  children: PropTypes.node,
}

SectionTitleAndInfoModal.defaultProps = {
  ariaLabel: null,
  ariaLang: 'en',
  withAsterisk: false,
  btnClose: null,
  children: null,
}

export default SectionTitleAndInfoModal
