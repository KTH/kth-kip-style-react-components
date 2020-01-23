
import React from 'react'
import { Row } from 'reactstrap'

/* EXAMPLE
 pages: [
    {
      title: '1. Choose course offering',
      intro: `Choose a semester and a course offering for the course memo data to be published (step 1 of 3).
      In the next step (2 of 3), course data will be fetched automatically for the selected semester and course offering.
      It is there possible to edit some of the course data and course memo data.
      Preview the table with the course data and course memo data that are about to be published in the last step (3 of 3).
      The course data with the course memo data will then be published on the page ....
      `
    },
    {
      title: '2. Edit course memo data',
      intro: `In this step (2 of 3) course memo data and course memo shall be uploaded,
      changes to the chosen course offering is summarized and some of the course data are reviewed and adjusted.`
    },
    {
      title: '3. Review and publish',
      intro: `In this step (3 of 3) a preview of the course memo data with course data is presented as it will be published on the page ....
      It is possible to go back to make adjustments, to save a draft or publish the information.`
    }
  ]
*/
const styles = {
  general: {
    margin: '0 0 50px 0'
  },
  p: {
    marginTop: '20px',
    marginBottom: '0'
  },
  progressInactive: {
    borderBottom: '2px solid #d4d4d4',
    paddingLeft: '0',
    marginBottom: '10px'
  },
  progressActive: {
    borderBottom: '2px solid #d4d4d4',
    paddingLeft: '0',
    marginBottom: '10px',
    fontWeight: '900'
  }
}
const ProgressBar = ({active, pages}) => {
  const pagesIndex = active - 1
  return (
    <Row className='progress-bar-container' style={styles.general}>
      {pages.map((page, index) => <div className={`col-md-4 col-sm-12 progress-bar1 ${pagesIndex === index ? 'progress-active' : ''}`}
        style={pagesIndex === index ? styles.progressActive : styles.progressInactive} key={page.title}>
        <span>{page.title}</span>
      </div>
      )}
      <div>
        <p data-testid='intro-text' style={styles.p}>{pages[pagesIndex].intro}</p>
      </div>
    </Row>
  )
}

export default ProgressBar
