import React from 'react'
import './keys-container.css'

class KeysContainer extends React.Component {
  render () {
    return (
      <div className='keys-container'>
        { this.props.children }
      </div>
    )
  }
}

export default KeysContainer
