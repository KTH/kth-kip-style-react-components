import React from 'react'
import renderer from 'react-test-renderer'
import PageTitle from '../lib/PageTitle'

const TEST_DATA = {
  mainTitle: 'Redigera introduktion till kursen',
  pageSubtitle: 'SF1624 Algebra och geometri 7,5 hp'
}

describe('PageTitle', () => {
  it('renders properly', () => {
    const tree = renderer
      .create(<PageTitle id='mainHeading' className='course-title' pageTitle={TEST_DATA.mainTitle}>
        <span>{TEST_DATA.pageSubtitle}</span>
      </PageTitle>
      ).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
