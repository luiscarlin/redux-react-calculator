import React from 'react'
import './Button.css'

class Button extends React.Component {
  render () {
    return (
      <div>
        <button onClick={() => this.props.onClick(this.props.value)}>
          { this.props.value }
        </button>
      </div>
    )
  }
}

export default Button
