import { connect } from 'react-redux'
import { changeStateProps } from '../../actions'
import form from './form'

const mapStateToProps = (state, ownProps) => {
  return {
    someUser: state.main.user,
    isUserEqual: state.main.name,
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
  mapDispatchToProps)(form)
