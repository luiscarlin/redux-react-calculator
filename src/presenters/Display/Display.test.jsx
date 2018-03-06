import Display from './' 

describe('Display', () => {
  it('renders an input field with value accepted from a property', () => {
    const display = shallow(<Display value='funny' />)
    expect(display.find('input').props().value).toEqual('funny')
  })

  it('the input field is readonly', () => {
    const display = shallow(<Display />)
    expect(display.find('input').props().readOnly).toEqual(true)
  })
})