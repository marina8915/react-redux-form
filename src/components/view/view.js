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
                    <li className='errors'>
                        {this.props.someNameError} <br/>
                        {this.props.someEmailError} <br/>
                        {this.props.somePhoneError} <br/>
                        {this.props.someAddressError} <br/>
                        {this.props.somePostcodeError} <br/>
                        {this.props.someDateBirthError}
                    </li>
                </ul>
            </div>
        )
    }
}