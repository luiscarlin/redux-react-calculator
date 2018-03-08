import { connect } from 'react-redux'
import Button from '../../presenters/Button' 
import { clearDisplay } from '../../actions'

const mapDispatchToProps = dispatch => ({
  onClick: () => { dispatch(clearDisplay()) }
})

export default connect(null, mapDispatchToProps)(Button)
