import React from 'react'
import renderer from 'react-test-renderer'

import CollapseDetails from '../lib/CollapseDetails'

const { getAllByRole } = screen

describe('Component <CollapseDetails>', () => {
  it('renders properly', () => {
    const tree = renderer
      .create(
        <CollapseDetails
          ariaLabel="Expand this to see a helping text"
          className="guidance-per-content"
          title="Show more information"
        >
          <p>Here you can found some text which helps you to fill in all data.</p>
        </CollapseDetails>
      )
      .toJSON()
    console.log(tree)
    expect(tree).toMatchSnapshot()
  })
})
