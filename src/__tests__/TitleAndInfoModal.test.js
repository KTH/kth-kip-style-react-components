import React from 'react'
import renderer from 'react-test-renderer'
import TitleAndInfoModal from '../lib/TitleAndInfoModal'

const TEST_TRANSLATIONS = {
  header: 'Course content',
  body: '<p>These help insturctions will be displayed when user click on modal icon \'info\'</p>'
}
const BUTTONS_TRANSLATIONS = {
  btnClose: 'Close'
}

describe('TitleAndInfoModal', () => {
  it('renders properly', () => {
    const tree = renderer
      .create(<TitleAndInfoModal modalId='courseContent' titleAndInfo={TEST_TRANSLATIONS} btnClose={BUTTONS_TRANSLATIONS.btnClose} />
      ).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
