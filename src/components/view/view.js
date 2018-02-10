import React, {Component} from 'react'

export default class View extends Component {

    render() {
        return (
            <div>
                <ul>
                    <li>{this.props.someName}</li>
                    <li>{this.props.someEmail}</li>
                    <li>{this.props.somePhone}</li>
                    <li>{this.props.someAddress}</li>
                    <li>{this.props.somePostcode}</li>
                    <li>{this.props.someDateBirth}</li>
                    <ul className='errors'>
                        <li>{this.props.someNameError}</li>
                        <li>{this.props.someEmailError}</li>
                        <li>{this.props.somePhoneError}</li>
                        <li>{this.props.someAddressError}</li>
                        <li>{this.props.somePostcodeError}</li>
                        <li>{this.props.someDateBirthError}</li>
                    </ul>
                </ul>
            </div>
        )
    }
}