import React from 'react'

class Button extends React.Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.onclick("1")}>
          { this.props.value }
        </button>
      </div>
    )
  }
}

export default Button