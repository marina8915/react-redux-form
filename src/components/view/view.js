import React, {Component} from 'react'

export default class View extends Component {
    componentDidMount() {

    }

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
                </ul>
            </div>
        )
    }
}