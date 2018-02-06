import { connect } from 'react-redux'
import View from './view'

const mapStateToProps = (state, ownProps) => {
  return {
      someName: state.main.name,
      someEmail: state.main.email,
      somePhone: state.main.phone,
      someAddress: state.main.address,
      somePostcode: state.main.postcode,
      someDateBirth: state.main.dateBirth
  }
}

export default connect(
  mapStateToProps)(View)
