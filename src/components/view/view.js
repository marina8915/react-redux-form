import React, {Component} from 'react'

export default class View extends Component {

    render() {
        return (
            <div>
                <ul>
                    <li>{this.props.someUser.name}</li>
                    <li>{this.props.someUser.email}</li>
                    <li>{this.props.someUser.phone}</li>
                    <li>{this.props.someUser.address}</li>
                    <li>{this.props.someUser.postcode}</li>
                    <li>{this.props.someUser.dateBirth}</li>
                    <ul className='errors'>
                        <li>{this.props.someErrors.nameError}</li>
                        <li>{this.props.someErrors.emailError}</li>
                        <li>{this.props.someErrors.phoneError}</li>
                        <li>{this.props.someErrors.addressError}</li>
                        <li>{this.props.someErrors.postcodeError}</li>
                        <li>{this.props.someErrors.dateBirthError}</li>
                    </ul>
                </ul>
            </div>
        )
    }
}