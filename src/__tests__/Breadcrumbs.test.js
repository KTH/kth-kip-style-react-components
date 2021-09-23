import React from 'react'

import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Breadcrumbs from '../lib/Breadcrumbs'

const { getAllByRole } = screen

describe('Component <Breadcrumbs>', () => {
  test('renders a Breadcrumbs without props', () => {
    render(<Breadcrumbs />)
  })

  test('renders basic breadcrumbs with only "university" in English', (done) => {
    render(<Breadcrumbs language="en" include="university" />)
    const links = getAllByRole('link')
    expect(links.length).toBe(1)

    expect(links[0].href).toBe('https://www.kth.se/en')
    expect(links[0]).toHaveTextContent('KTH')

    done()
  })

  test('renders basic breadcrumbs ending with "student" in English', (done) => {
    render(<Breadcrumbs language="en" include="student" />)
    const links = getAllByRole('link')
    expect(links.length).toBe(2)

    expect(links[1].href).toBe('https://www.kth.se/en/student')
    expect(links[1]).toHaveTextContent(/^Student at KTH/)
    done()
  })

  test('renders basic breadcrumbs ending with "directory" in English', (done) => {
    render(<Breadcrumbs language="en" include="directory" />)
    const links = getAllByRole('link')
    expect(links.length).toBe(3)

    expect(links[2].href).toBe('http://localhost/student/kurser/kurser-inom-program?l=en')
    expect(links[2]).toHaveTextContent(/^Course and programme directory/)
    done()
  })

  test('renders basic breadcrumbs for "About course" page in English', (done) => {
    render(<Breadcrumbs courseCode="KIP1111" language="en" include="aboutCourse" />)
    const links = getAllByRole('link')
    expect(links.length).toBe(4)

    expect(links[0].href).toBe('https://www.kth.se/en')
    expect(links[0]).toHaveTextContent('KTH')
    expect(links[1].href).toBe('https://www.kth.se/en/student')
    expect(links[1]).toHaveTextContent(/^Student at KTH/)
    expect(links[2].href).toBe('http://localhost/student/kurser/kurser-inom-program?l=en')
    expect(links[2]).toHaveTextContent(/^Course and programme directory/)
    expect(links[3].href).toBe('http://localhost/student/kurser/kurs/KIP1111?l=en')
    expect(links[3]).toHaveTextContent(/^About course KIP1111/)

    done()
  })

  test('renders basic breadcrumbs for "About course" page in Swedish', (done) => {
    render(<Breadcrumbs courseCode="KIP1111" language="sv" include="aboutCourse" />)
    const links = getAllByRole('link')
    expect(links.length).toBe(4)

    expect(links[0].href).toBe('https://www.kth.se/')
    expect(links[0]).toHaveTextContent('KTH')
    expect(links[1].href).toBe('https://www.kth.se/student')
    expect(links[1]).toHaveTextContent(/^Student på KTH/)
    expect(links[2].href).toBe('http://localhost/student/kurser/kurser-inom-program')
    expect(links[2]).toHaveTextContent(/^Kurs- och programkatalogen/)
    expect(links[3].href).toBe('http://localhost/student/kurser/kurs/KIP1111?l=sv')
    expect(links[3]).toHaveTextContent(/^Om kursen KIP1111/)

    done()
  })

  test('renders only added breadcrumb', (done) => {
    render(
      <Breadcrumbs
        items={[
          {
            url: 'https://www.kth.se/student/kurser/program/A/20042/arskurs5',
            label: 'Degree Programme in Architecture',
          },
        ]}
      />
    )
    const link = screen.getByRole('link')
    expect(link.href).toBe('https://www.kth.se/student/kurser/program/A/20042/arskurs5')
    expect(link).toHaveTextContent(/^Degree Programme in Architecture/)

    done()
  })

  test('renders basic breadcrumbs and added breadcrumbs', (done) => {
    render(
      <Breadcrumbs
        items={[
          {
            url: '/student/kurser/program/A/20042/arskurs5?l=sv',
            label: 'Arkitektutbildning',
          },
        ]}
        language="sv"
        include="directory"
      />
    )
    const links = getAllByRole('link')
    expect(links.length).toBe(4)

    expect(links[3].href).toBe('http://localhost/student/kurser/program/A/20042/arskurs5?l=sv')
    expect(links[3]).toHaveTextContent(/^Arkitektutbildning/)

    done()
  })
})
