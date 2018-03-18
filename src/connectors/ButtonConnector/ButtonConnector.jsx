import { connect } from 'react-redux'
import Button from '../../presenters/Button'
import { getPushToDisplayAction } from '../../actions'

const mapDispatchToProps = dispatch => ({
  onClick: (val) => { dispatch(getPushToDisplayAction(val)) }
})

export default connect(null, mapDispatchToProps)(Button)
