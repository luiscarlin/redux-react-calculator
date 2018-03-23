import React from 'react'

class CalculatorContainer extends React.Component {
  render () {
    return (
      <div>
        { this.props.children }
      </div>
    )
  }
}

export default CalculatorContainer
