import { connect } from 'react-redux'
import Button from '../../presenters/Button' 
import { pushToDisplay } from '../../actions'

const mapDispatchToProps = dispatch => ({
  onClick: (val) => { dispatch(pushToDisplay(val)) }
})

export default connect(null, mapDispatchToProps)(Button)
