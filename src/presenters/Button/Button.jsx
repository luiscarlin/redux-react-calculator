import React from 'react'
import './button.css'

class Button extends React.Component {
  render () {
    return (
      <button className='component-button' onClick={() => this.props.onClick(this.props.value)}>
        { this.props.value }
      </button>
    )
  }
}

export default Button
