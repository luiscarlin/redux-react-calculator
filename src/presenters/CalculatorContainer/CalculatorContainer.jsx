import React from 'react'
import './calculator-container.css'

class CalculatorContainer extends React.Component {
  render () {
    return (
      <div className='calculator-container'>
        { this.props.children }
      </div>
    )
  }
}

export default CalculatorContainer
