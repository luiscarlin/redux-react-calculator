import { connect } from 'react-redux'
import Button from '../../presenters/Button' 
import { getClearDisplayAction } from '../../actions'

const mapDispatchToProps = dispatch => ({
  onClick: () => { dispatch(getClearDisplayAction()) }
})

export default connect(null, mapDispatchToProps)(Button)
