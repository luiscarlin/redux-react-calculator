import Display from './' 

describe('Display', () => {
  it('renders an input field with value accepted from a property', () => {
    const display = shallow(<Display value='funny' />)
    expect(display.find('input').props().value).toEqual('funny')
  })
})