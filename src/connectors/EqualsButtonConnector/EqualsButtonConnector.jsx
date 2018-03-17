import { connect } from 'react-redux'
import Button from '../../presenters/Button' 
import { getCalculateAction } from '../../actions'

const mapDispatchToProps = dispatch => ({
  onClick: () => { dispatch(getCalculateAction()) }
})

export default connect(null, mapDispatchToProps)(Button)
