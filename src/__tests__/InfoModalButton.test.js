import React from 'react'
import renderer from 'react-test-renderer'
import InfoModalButton from '../lib/InfoModalButton'

const TEST_INFO_FOR_IMAGE = {
  header: 'Choose image',
  body: `<p>Choose the image that will be displayed on the page Course information. 
    You can choose a default image based on the main subject of the course or choose to upload an image on your own choice. 
    The image will be displayed with the format 300px * 400px. The file format must be .png or .jpg.</p>`,
  btnClose: 'Close'
}

describe('InfoModalButton', () => {
  it('renders properly', () => {
    const tree = renderer
      .create(<InfoModalButton id='infoPic'
        modalLabels={TEST_INFO_FOR_IMAGE} className='modal-for-info-for-picture' />
      ).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
