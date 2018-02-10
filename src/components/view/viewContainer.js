import { connect } from 'react-redux'
import View from './view'

const mapStateToProps = (state, ownProps) => {
  return {
      someName: state.main.name,
      someEmail: state.main.email,
      somePhone: state.main.phone,
      someAddress: state.main.address,
      somePostcode: state.main.postcode,
      someDateBirth: state.main.dateBirth,
      sameNameError: state.main.nameError,
      someEmailError: state.main.emailError,
      somePhoneError: state.main.phoneError,
      someAddressError: state.main.addressError,
      somePostcodeError: state.main.postcodeError,
      someDateBirthError: state.main.dateBirthError
  }
}

export default connect(
  mapStateToProps)(View)
