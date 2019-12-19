import React from 'react'
import renderer from 'react-test-renderer'
import InfoModal from '../lib/InfoModal'

const TEST_TRANSLATIONS = {
  header: 'Choose image',
  body: `Choose the image that will be displayed on the page Course information. 
    You can choose a default image based on the main subject of the course or choose to upload an image on your own choice. 
    The image will be displayed with the format 300px * 400px. The file format must be .png or .jpg.`,
  btnCancel: 'Close'
}

describe('InfoModal', () => {
  it('renders properly', () => {
    const tree = renderer
      .create(<InfoModal isOpen onToggle={() => 'Hello, it is a test!'}
        id='infoPic' header={TEST_TRANSLATIONS.header} body={TEST_TRANSLATIONS.body} closeLabel={TEST_TRANSLATIONS.btnCancel} />
      ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})