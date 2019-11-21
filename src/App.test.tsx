import React from 'react'
import { mount } from 'enzyme'

import App from './App'

describe('App', () => {
  it('renders', () => {
    const tree = mount(<App />)
    expect(tree).toBeTruthy()
  })
})
