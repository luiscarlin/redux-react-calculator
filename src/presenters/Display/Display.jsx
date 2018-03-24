import React from 'react'
import './display.css'

class Display extends React.Component {
  render () {
    return (
      <input className="display" value={this.props.value} readOnly />
    )
  }
}

export default Display
