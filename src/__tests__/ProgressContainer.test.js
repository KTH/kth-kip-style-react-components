import React from 'react'
import renderer from 'react-test-renderer'
import ProgressBar from '../lib/ProgressContainer'

const TEST_DATA = {
  pages: [
    {
      title: '1. Välj bild',
      intro: `Choose a semester and a course offering for the course memo data to be published (step 1 of 3).
      In the next step (2 of 3), course data will be fetched automatically for the selected semester and course offering.
      It is there possible to edit some of the course data and course memo data.
      Preview the table with the course data and course memo data that are about to be published in the last step (3 of 3).
      The course data with the course memo data will then be published on the page ....
      `
    },
    {
      title: '2. Redigera text',
      intro: `In this step (2 of 3) course memo data and course memo shall be uploaded,
      changes to the chosen course offering is summarized and some of the course data are reviewed and adjusted.`
    },
    {
      title: '3. Granska och publicera',
      intro: `Börja med att välja vilken bild som ska visas på kursinformationssidan (steg 1 av 3). I nästa steg (2 av 3) kommer du att kunna redigera den inledande texten. 
      I sista steget (3 av 3) ges möjlighet att först granska bild och text och sedan publicera det på sidan ”Kursinformation”.`
    }
  ]
}

describe('ProgressContainer', () => {
  it('renders properly', () => {
    const tree = renderer
      .create(<ProgressBar active={1} pages={TEST_DATA.pages} />
        ).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
