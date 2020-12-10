const breadcrumbLinks = {
  university: { en: 'https://www.kth.se/en', sv: 'https://www.kth.se/' },
  student: { en: 'https://www.kth.se/en/student', sv: 'https://www.kth.se/student' },
  directory: {
    en: '/student/kurser/kurser-inom-program?l=en',
    sv: '/student/kurser/kurser-inom-program',
  },
  aboutCourse: { en: '', sv: '' },
}

const breadCrumbLabels = {
  en: {
    university: 'KTH',
    student: 'Student at KTH',
    directory: 'Course and programme directory',
    aboutCourse: 'About course',
  },
  sv: {
    university: 'KTH',
    student: 'Student på KTH',
    directory: 'Kurs- och programkatalogen',
    aboutCourse: 'Om kursen',
  },
}

const _turnIntoItem = (name, language) => ({
  url: breadcrumbLinks[name][language],
  label: breadCrumbLabels[language][name],
})

const depth = {
  none: 0,
  university: 1,
  student: 2,
  directory: 3,
  aboutCourse: 4,
}

const basicBreadcrumbs = (include = 'none', courseCode = '', language = 'sv') => {
  const allbreadcrumbs = ['university', 'student', 'directory', 'aboutCourse']
  if (include === 'aboutCourse') {
    if (!courseCode) throw new Error('<Breadcrumbs/> failed - add courseCode property, f.e., courseCode="sf1624"')
    breadcrumbLinks.aboutCourse = {
      [language]: `/student/kurser/kurs/${courseCode.toUpperCase()}`,
    }
    breadCrumbLabels[language].aboutCourse += ` ${courseCode}`
  }
  const chosenBreacrumbsItem = allbreadcrumbs.map((name) => _turnIntoItem(name, language)).slice(0, depth[include])

  return chosenBreacrumbsItem
}

const sideMenuBackLink = {
  en: '/student/kurser/kurser-inom-program?l=en',
  sv: '/student/kurser/kurser-inom-program',
}

module.exports = {
  basicBreadcrumbs,
  breadcrumbLinks,
  sideMenuBackLink,
}
