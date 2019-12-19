import React from 'react'
import renderer from 'react-test-renderer'
import ActionModalButton from '../lib/ActionModalButton'

const TEST_INFO_FOR_CANCEL = {
  header: 'To be aware of before cancelling!',
  body: '<p>Unsaved changes will be lost if you cancel the publishing of course information (image and text) <br/>  <br/> Do you want to cancel?</p>',
  btnClose: 'No, go back',
  btnConfirm: 'Yes, cancel'
}

describe('ActionModalButton', () => {
  it('renders properly', () => {
    const tree = renderer
      .create(<ActionModalButton modalId='modalId' type='cancel'
        modalLabels={TEST_INFO_FOR_CANCEL} className='start-button-for-cancel-modal' />
      ).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
