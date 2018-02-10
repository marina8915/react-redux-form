import { connect } from 'react-redux'
import { changeStateProps } from '../../actions'
import Form from './form'

const mapStateToProps = (state, ownProps) => {
  return {
      someName: state.main.name,
      someEmail: state.main.email,
      somePhone: state.main.name,
      someAddress: state.main.email,
      somePostcode: state.main.postcode,
      someDateBirth: state.main.dateBirth,
      someNameError: state.main.nameError,
      someEmailError: state.main.emailError,
      somePhoneError: state.main.phoneError,
      someAddressError: state.main.addressError,
      somePostcodeError: state.main.postcodeError,
      someDateBirthError: state.main.dateBirthError,
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
