import { connect } from 'react-redux'
import view from './view'

const mapStateToProps = (state, ownProps) => {
  return {
    someUser: state.main.user
  }
}

export default connect(
  mapStateToProps)(view)
