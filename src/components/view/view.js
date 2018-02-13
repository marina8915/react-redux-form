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
                        <li>{this.props.someErrors.requireError}</li>
                        <li>{this.props.someErrors.emailError}</li>
                        <li>{this.props.someErrors.phoneError}</li>
                        <li>{this.props.someErrors.postcodeError}</li>
                    </ul>
                </ul>
            </div>
        )
    }
}