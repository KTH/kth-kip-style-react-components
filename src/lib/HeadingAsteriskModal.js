import React from 'react'
import InfoModalButton from './InfoModalButton'
import PropTypes from 'prop-types'
import { FaAsterisk } from 'react-icons/fa'

const styles = {
  span: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  btnInfoModal: {
    verticalAlign: 'middle',
    minHeight: '0.75rem',
  },
  heading: {
    marginBottom: '0',
  },
}
const classNameByHeading = {
  h2: 'section-title-and-info',
  h3: 'title-and-info',
}

const dataTestIdByHeading = {
  h2: '-section-heading',
  h3: '-heading',
}

const HeadingAsteriskModal = ({
  modalBtnAriaLabel,
  ariaLang,
  headingTag: HeadingTag,
  modalId,
  withAsterisk,
  withModal,
  titleAndInfo,
  btnClose,
  children,
}) => {
  const { header, body = '' } = titleAndInfo
  const infoModalLabels = {
    header,
    body,
    btnClose: btnClose || ariaLang === 'en' ? 'Close' : 'Stäng',
  }
  return (
    <span className={classNameByHeading[HeadingTag] || 'title-and-info'} style={styles.span}>
      <HeadingTag data-testid={`${modalId}${dataTestIdByHeading[HeadingTag] || '-heading'}`} style={styles.heading}>
        {header}
        {withAsterisk && (
          <sup>
            <FaAsterisk className="syllabus-marker-icon" />
          </sup>
        )}
        {withModal && (
          <InfoModalButton
            ariaLabel={
              modalBtnAriaLabel || ariaLang === 'en' ? `Information about ${header}` : `Information om ${header}`
            }
            style={styles.btnInfoModal}
            modalId={modalId + '-infoModal'}
            modalLabels={infoModalLabels}
          />
        )}
      </HeadingTag>
      {children}
    </span>
  )
}

HeadingAsteriskModal.propTypes = {
  ariaLang: PropTypes.string,
  btnClose: PropTypes.string,
  headingTag: PropTypes.string,
  modalBtnAriaLabel: PropTypes.string,
  modalId: PropTypes.string.isRequired,
  titleAndInfo: PropTypes.shape({
    header: PropTypes.string.isRequired,
    body: PropTypes.string,
  }),
  withAsterisk: PropTypes.bool,
  withModal: PropTypes.bool,
  children: PropTypes.node,
}

HeadingAsteriskModal.defaultProps = {
  ariaLang: 'en',
  headingTag: 'h3',
  modalBtnAriaLabel: null,
  withAsterisk: false,
  withModal: false,
  btnClose: null,
  children: null,
}

export default HeadingAsteriskModal
