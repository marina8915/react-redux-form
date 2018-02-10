import { connect } from 'react-redux'
import { changeStateProps } from '../../actions'
import Form from './form'

const mapStateToProps = (state, ownProps) => {
  return {
      someUser: state.main.user,
      someErrors: state.main.errors,
      isUserEqual: state.main.name === ownProps.testName,
    ...ownProps
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeStateProps: (prop, value) => {
      dispatch(changeStateProps(prop, value))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)(Form)
