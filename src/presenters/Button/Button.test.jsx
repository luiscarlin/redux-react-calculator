import Button from './'

describe('Button', () => {
  it('renders a button with value passed', () => {
    const subject = shallow(<Button value={'1234'}/>)
    expect(subject.find('button').text()).toEqual('1234')
  })

  it('executes onclick function when clicked', () => {
    const onClickMock = jest.fn()
    const subject = shallow(<Button onClick={onClickMock} value={'something'} />)
    subject.find('button').simulate('click')
    expect(onClickMock).toHaveBeenCalledWith('something')
  })
})
