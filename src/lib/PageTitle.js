import React, { Component } from 'react'

class PageTitle extends Component {

  render () {
      /**
       * <PageTitle id='mainHeading' pageTitle="Redigera introduktion till kursen">
       *    <span>SF1624 Algebra och geometri 7,5 hp</span>
       * </PageTitle>
       */
    const { pageTitle, children, id } = this.props
    return (
      <div id={id} className={'pageTitle col ' + this.props.className}>
        <h1 data-testid='main-heading'>{pageTitle}</h1>
        <div data-testid='sub-heading'>
            {children}
        </div>
      </div>
    )
  }
}

export default PageTitle
