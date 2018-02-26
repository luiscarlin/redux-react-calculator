import React from 'react'
import { shallow } from 'enzyme'
import Button from './'

it('renders without crashing', () => {
  shallow(<Button value={ '1234' }/>)
})