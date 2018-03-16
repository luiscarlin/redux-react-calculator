import { connect } from 'react-redux'
import Button from '../../presenters/Button' 
import { calculate } from '../../actions'

const mapDispatchToProps = dispatch => ({
  onClick: () => { dispatch(calculate()) }
})

export default connect(null, mapDispatchToProps)(Button)
