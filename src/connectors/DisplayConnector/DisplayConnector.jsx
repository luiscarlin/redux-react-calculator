import { connect } from 'react-redux'
import Display from '../../presenters/Display'

const mapStateToProps = state => ({
  value: state.displayReducer.display
})

export default connect(mapStateToProps, null)(Display)
