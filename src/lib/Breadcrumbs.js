/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import PropTypes from 'prop-types'

const _breadcrumbLinks = {
  university: { en: 'https://www.kth.se/en', sv: 'https://www.kth.se/' },
  student: { en: 'https://www.kth.se/en/student', sv: 'https://www.kth.se/student' },
  directory: {
    en: '/student/kurser/kurser-inom-program?l=en',
    sv: '/student/kurser/kurser-inom-program',
  },
  aboutCourse: { en: '', sv: '' },
}

const aboutCourse = {
  en: 'About course',
  sv: 'Om kursen',
}

const _breadCrumbLabels = {
  en: {
    university: 'KTH',
    student: 'Student at KTH',
    directory: 'Course and programme directory',
    aboutCourse: '', // must be initiated empty
  },
  sv: {
    university: 'KTH',
    student: 'Student på KTH',
    directory: 'Kurs- och programkatalogen',
    aboutCourse: '', // must be initiated empty
  },
}

const _turnIntoItem = (name, language) => ({
  url: _breadcrumbLinks[name][language],
  label: _breadCrumbLabels[language][name],
})

const depth = {
  none: 0,
  university: 1,
  student: 2,
  directory: 3,
  aboutCourse: 4,
}

const _basicBreadcrumbs = (include = 'none', courseCode = '', language = 'sv') => {
  const allbreadcrumbs = ['university', 'student', 'directory', 'aboutCourse']
  if (include === 'aboutCourse') {
    if (!courseCode) throw new Error('<Breadcrumbs/> failed - add courseCode property, f.e., courseCode="sf1624"')
    _breadcrumbLinks.aboutCourse = {
      [language]: `/student/kurser/kurs/${courseCode.toUpperCase()}?l=${language}`,
    }
    _breadCrumbLabels[language].aboutCourse = `${aboutCourse[language]} ${courseCode}`
  }
  const chosenBreacrumbsItem = allbreadcrumbs.map((name) => _turnIntoItem(name, language)).slice(0, depth[include])

  return chosenBreacrumbsItem
}

const sideMenuBackLink = {
  en: '/student/kurser/kurser-inom-program?l=en',
  sv: '/student/kurser/kurser-inom-program',
}

function _isNoObject(input) {
  return input == null || typeof input !== 'object'
}

function _ensureItemsAreValid(items) {
  if (!Array.isArray(items) || items.some(_isNoObject)) {
    throw new Error('<Breadcrumbs/> failed - invalid prop "items", expected object[]')
  }
  if (
    items.some(({ label, url }) => typeof label !== 'string' || label === '' || typeof url !== 'string' || url === '')
  ) {
    throw new Error('<Breadcrumbs/> failed - invalid prop "items", expected array of { label, url }')
  }
}

const _turnItemIntoBreadcrumb = (item, index) => {
  const { url, label, disabled } = item
  return (
    <li key={index} className="breadcrumb-item">
      {disabled ? <a className="last-breadcrumb-element">{label}</a> : <a href={url}>{label}</a>}
    </li>
  )
}

const Breadcrumbs = (props) => {
  const { items, language = 'sv', include = 'none', courseCode = '' } = props
  const navAriaLabel = language === 'sv' ? 'Brödsmulor' : 'Breadcrumbs'

  const newBreadcrumbItems = items || []

  _ensureItemsAreValid(newBreadcrumbItems)

  const mergedItems = [..._basicBreadcrumbs(include, courseCode, language), ...newBreadcrumbItems]

  if (mergedItems.length === 0) {
    return null
  }

  return (
    <nav id="breadcrumbs" lang={language} aria-label={navAriaLabel} className="col-12 col-md-9">
      <ol className="breadcrumb">{mergedItems.map(_turnItemIntoBreadcrumb)}</ol>
    </nav>
  )
}

Breadcrumbs.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      label: PropTypes.string,
    })
  ),
  courseCode: PropTypes.string,
  include: PropTypes.oneOf(['none', 'university', 'student', 'directory', 'aboutCourse']),
  language: PropTypes.oneOf(['sv', 'en']),
}

Breadcrumbs.defaultProps = {
  items: [],
  courseCode: '',
  include: 'none',
  language: 'sv',
}

export default Breadcrumbs
