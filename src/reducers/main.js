import update from 'immutability-helper'

let defaultState = {
    name: '',
    email: '',
    phone: '',
    address: '',
    postcode: '',
    dateBirth: '',
    nameError: '',
    emailError: '',
    phoneError: '',
    addressError: '',
    postcodeError: '',
    dateBirthError: '',
    validation: true
}

const main = (state = defaultState, action) => {
    switch (action.type) {
        case 'CHANGE_STATE_PROPS':
            return update(state, {
                [action.state.prop]: {$set: action.state.value}
            })
        default:
            return state
    }
}

export default main
