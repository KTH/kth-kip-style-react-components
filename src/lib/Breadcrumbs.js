/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { basicBreadcrumbs } from './util/breadcrumbs'

function isNoObject(input) {
  return input == null || typeof input !== 'object'
}

function ensureItemsAreValid(items) {
  if (!Array.isArray(items) || items.some(isNoObject)) {
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

  ensureItemsAreValid(newBreadcrumbItems)

  const mergedItems = [...basicBreadcrumbs(include, courseCode, language), ...newBreadcrumbItems]

  if (mergedItems.length === 0) {
    return null
  }

  return (
    <nav id="breadcrumbs" lang={language} aria-label={navAriaLabel} className="col-12 col-md-9">
      <ol className="breadcrumb">{mergedItems.map(_turnItemIntoBreadcrumb)}</ol>
    </nav>
  )
}

export default Breadcrumbs
