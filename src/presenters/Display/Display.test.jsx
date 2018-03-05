import Display from './' 

describe('Display', () => {
  it('renders an input field', () => {
    const display = shallow(<Display />)
    expect(display.find('input')).toHaveLength(1)
  })
})