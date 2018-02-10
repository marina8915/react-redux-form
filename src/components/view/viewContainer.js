import { connect } from 'react-redux'
import View from './view'

const mapStateToProps = (state, ownProps) => {
  return {
      someUser: state.main.user,
      someErrors: state.main.errors
  }
}

export default connect(
  mapStateToProps)(View)
